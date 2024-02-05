/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { secondaryButtonTheme, primaryButtonTheme } from '../../../mui-theme/buttons';
import DefaultButton from '../../default-button';
import ImageUpload from '../../../images/Upload.svg';
import { postProject, updateProjectById } from '../../../service/orangeApi';
import { ProjectsContext } from '../../../context/AuthProvider/projectsProvider';
import TagTextField from '../tagModalField';
import imageTo64 from '../../../helpers/imageTo64';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../context/AuthProvider/authProvider';
import { postProjectValidators } from '../../../validators/validators';
import { isImageBroken } from '../../../validators/helpers';

Modal.setAppElement('#root');

export default function CreateAndEditModalProject({
  isOpen, toggleCreateModal, toggleFeedbackModal, projectInfo, isEditMode,
}) {
  const { user } = useContext(AuthContext);
  const { tags, fetchProjects } = useContext(ProjectsContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imageFile, setImageFile] = useState(null);
  const [formValues, setFormValues] = useState({
    title: '',
    tags: [],
    link: '',
    description: '',
  });

  const [errors, setErrors] = useState({
    title: '',
    tags: '',
    link: '',
    description: '',
  });

  const clearForm = () => {
    setFormValues({
      title: '',
      tags: [],
      link: '',
      description: '',
    });
    setImageFile(null);
  };

  const handleResponse = async (response, message) => {
    if (response.status === 201 || response.status === 200) {
      toggleCreateModal();
      toggleFeedbackModal(message);
      fetchProjects(user.id);
      clearForm();
      return;
    }
    toast.error(response.data.message);
  };

  const updateErrors = (newErrors) => setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));

  const validation = (forms) => {
    for (const field in postProjectValidators) {
      const valid = postProjectValidators[field](forms[field]);
      if (valid) {
        updateErrors({ [field]: valid });
        return false;
      }
    }
    return true;
  };

  const handleRequest = async () => {
    const {
      title, tags: formTags, link, description,
    } = formValues;
    const base64Image = imageFile ? await imageTo64(imageFile) : null;

    setErrors({
      title: '',
      tags: '',
      link: '',
      description: '',
      image: '',
    });

    if (!validation(formValues)) return;

    if (isEditMode) {
      const response = await updateProjectById(
        projectInfo.project.id,
        {
          description,
          link,
          tags: formTags,
          name: title,
          image: base64Image,
        },
      );
      handleResponse(response, 'Projeto editado com sucesso!');
      return;
    }
    const response = await postProject(
      {
        description,
        link,
        tags: formTags,
        name: title,
        image: base64Image,
      },
    );
    handleResponse(response, 'Projeto adicionado com sucesso!');
  };

  const onCancelClick = () => {
    toggleCreateModal();
    setFormValues({
      title: '',
      tags: [],
      link: '',
      description: '',
    });
    setImageFile(null);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleInputChanges = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleImageClick = () => {
    document.getElementById('uploadImageInput').click();
  };

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (await isImageBroken(file)) {
      toast.error('Imagem inválida');
      return;
    }
    setImageFile(file);
  };

  return (
    <Box style={{ textAlign: 'center', justifyContent: 'flex-start' }}>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleCreateModal}
          contentLabel="Adicionando Projeto"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              maxWidth: '900px',
              margin: 'auto',

            },
            zIndex: 1000,
          }}
        >
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '30px',
              color: '#515255',
              margin: 'auto',
            }}
          >
            <h1
              style={{
                fontSize: '24px',
                lineHeight: '24px',
                fontWeight: '400',

              }}
            >
              {isEditMode ? 'Editar Projeto' : 'Adicionar Projeto'}
            </h1>
          </Box>
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '15px',
              color: '#515255',
              margin: '10px 0px 0px 0px',
              maxWidth: '100%',
            }}
          >
            <h3>Selecione um conteúdo que você deseja fazer upload</h3>
          </Box>
          <Box
            style={{
              width: '400px',
              flexDirection: 'column',
              maxWidth: '100%',
              margin: windowWidth <= 950 ? '40px auto 0px auto' : '40px 0px 0px 50%',
            }}
          >

            <TextField
              label="Título"
              placeholder=" "
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.title}
              onChange={handleInputChanges}
              name="title"
              fullWidth
              style={{ marginBottom: '1rem' }}
              error={Boolean(errors.title)}
              helperText={errors.title}

            />
            {tags && tags.length > 0 && (
            <TagTextField
              tags={tags}
              formValues={formValues}
              handleInputChanges={handleInputChanges}
              errors={Boolean(errors.tags)}
              helperText={errors.tags}
            />
            )}

            <TextField
              label="Link"
              placeholder=" "
              type="url"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.link}
              onChange={handleInputChanges}
              name="link"
              fullWidth
              style={{ marginBottom: '1rem' }}
              error={Boolean(errors.link)}
              helperText={errors.link}
            />

            <TextField
              label="Descrição"
              placeholder=" "
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              value={formValues.description}
              onChange={handleInputChanges}
              name="description"
              fullWidth
              style={{ marginBottom: '1rem' }}
              multiline
              rows={3}
              error={Boolean(errors.description)}
              helperText={errors.description}
            />
          </Box>
          <Box
            style={{
              width: '100%',
              maxWidth: '430px',
              flexDirection: 'column',
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              margin: windowWidth <= 950 ? '40px auto 0px auto' : '-340px 0px 0px 0px',
            }}
          >
            <img
              src={imageFile ? URL.createObjectURL(imageFile) : ImageUpload}
              alt="Imagem de registro"
              style={{ maxWidth: '100%', cursor: 'pointer' }}
              onClick={handleImageClick}
            />
            <input
              type="file"
              id="uploadImageInput"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
          </Box>
          <Box
            style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '20px',
              color: '#515255',
              margin: windowWidth <= 950 ? '10px auto 5px 15%' : '10px 0px 0px 0px',
            }}
          >
            {/* <Typography variant="h1" role="button" onClick={handleClickLabel}>
            Visualizar Publicação</Typography> */}
          </Box>

          <Box
            style={{
              width: 'auto',
              maxWidth: '300px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: '20px',
              margin: windowWidth <= 950 ? 'auto' : '10px 0px 0px 0px',
            }}
          >
            <DefaultButton theme={primaryButtonTheme} label="Salvar" onClick={handleRequest} style={{ margin: '0 0.5rem 0 0' }} />
            <DefaultButton theme={secondaryButtonTheme} label="Cancelar" onClick={onCancelClick} style={{ margin: '0 0 0 0.5rem' }} />
          </Box>
        </Modal>
      )}
      <ToastContainer />
    </Box>
  );
}

CreateAndEditModalProject.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleCreateModal: PropTypes.func.isRequired,
  toggleFeedbackModal: PropTypes.func.isRequired,
  projectInfo: PropTypes.shape({
    project: PropTypes.shape({
      createdAt: PropTypes.string,
      description: PropTypes.string,
      id: PropTypes.string,
      image: PropTypes.string,
      link: PropTypes.string,
      name: PropTypes.string,
      updatedAt: PropTypes.string,
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    user: PropTypes.shape({
      email: PropTypes.string,
      id: PropTypes.string,
      fullName: PropTypes.string,
      image: PropTypes.string,
    }).isRequired,
  }),
  isEditMode: PropTypes.bool.isRequired,
};

CreateAndEditModalProject.defaultProps = {
  projectInfo: {
    project: {
      createdAt: '',
      description: '',
      id: '',
      image: '',
      link: '',
      name: '',
      updatedAt: '',
    },
    tags: [],
    user: {
      email: '',
      id: '',
      fullName: '',
      image: '',
    },
  },
};
