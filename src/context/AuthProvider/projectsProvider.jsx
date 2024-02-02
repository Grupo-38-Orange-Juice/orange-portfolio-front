import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';
import { getProjectsByUserId } from '../../service/api';
import { AuthContext } from './authProvider';

export const ProjectsContext = createContext({});

function ProjectsProvider({ children }) {
  const [projectsInfo, setProjects] = useState([]);
  const { user } = useContext(AuthContext);

  const fetchProjects = async (userId) => {
    const { data } = await getProjectsByUserId(userId);
    setProjects(data);
  };

  useEffect(() => {
    if (user) fetchProjects(user.id);
  }, [user]);

  const projectsContextValue = useMemo(() => ({
    projectsInfo,
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
