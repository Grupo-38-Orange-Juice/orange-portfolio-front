/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';
import { secondaryButtonTheme, primaryButtonTheme } from '../../mui-theme/buttons';
import DefaultButton from '../default-button';
import ImageUpload from '../../images/Upload.svg';
import { postProject } from '../../service/api';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';
import TagTextField from './tagModalField';
import imageTo64 from '../../helpers/imageTo64';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../context/AuthProvider/authProvider';
import { postProjectValidators } from '../../validators/validators';
import { isImageBroken } from '../../validators/helpers';

Modal.setAppElement('#root');

export default function AdicionarProjeto({ modalIsOpen, toggleModal }) {
  const [imageFile, setImageFile] = useState(null);
  const { tags, fetchProjects } = useContext(ProjectsContext);
  const { user } = useContext(AuthContext);
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

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateErrors = (newErrors) => setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));

  const createProject = async () => {
    const base64Image = imageFile ? await imageTo64(imageFile) : null;

    setErrors({
      title: '',
      tags: '',
      link: '',
      description: '',
      image: '',
    });

    for (const field in postProjectValidators) {
      const validation = postProjectValidators[field](formValues[field]);
      if (validation) {
        updateErrors({ [field]: validation });
        return;
      }
    }
    const response = await postProject(
      {
        description: formValues.description,
        link: formValues.link,
        tags: formValues.tags,
        name: formValues.title,
        image: base64Image,
      },
    );
    if (response.status === 201) {
      toggleModal();
      formValues.title = '';
      formValues.tags = [];
      formValues.link = '';
      formValues.description = '';
      setImageFile(null);
      toast.success('Projeto cadastrado com sucesso!');
      fetchProjects(user.id);
    } else {
      toast.error(response.data.message || 'Erro ao cadastrar projeto!');
    }
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
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          contentLabel="Adicionando Projeto"
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            },
            content: {
              maxWidth: '900px',
              margin: '5% auto auto auto',

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
            <h1>Adicionar Projeto</h1>
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
            <h3>Selecione um conteudo que vc deseja fazer upload</h3>
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
            <h1> Visualizar Publicação</h1>
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
            <DefaultButton theme={primaryButtonTheme} label="Salvar" onClick={createProject} style={{ margin: '0 0.5rem 0 0' }} />
            <DefaultButton theme={secondaryButtonTheme} label="Cancelar" onClick={toggleModal} style={{ margin: '0 0 0 0.5rem' }} />
          </Box>
        </Modal>
      )}
      <ToastContainer />
    </Box>
  );
}
AdicionarProjeto.propTypes = {
  modalIsOpen: PropTypes.bool.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
