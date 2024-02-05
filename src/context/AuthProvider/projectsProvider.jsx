import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

import { AuthContext } from './authProvider';
import { getAllTags, getProjectsByUserId } from '../../service/orangeApi';

export const ProjectsContext = createContext({});

function ProjectsProvider({ children }) {
  const [projectsInfo, setProjects] = useState([]);
  const [tags, setTags] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchProjects = async (userId) => {
    const { data } = await getProjectsByUserId(userId);
    if (data) setProjects(data);
    else setProjects([]);
  };

  const fetchTags = async () => {
    const { data } = await getAllTags();
    setTags(data);
  };

  useEffect(() => {
    if (user) fetchProjects(user.id);
    fetchTags();
  }, [user]);

  const projectsContextValue = useMemo(() => ({
    projectsInfo,
    tags,
    fetchProjects,
  }), [projectsInfo]);

  return (
    <ProjectsContext.Provider value={projectsContextValue}>
      {children}
    </ProjectsContext.Provider>
  );
}

ProjectsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProjectsProvider;
