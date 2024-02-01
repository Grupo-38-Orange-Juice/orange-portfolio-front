import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import CardPerfil from '../../components/CardPerfil';
import ProjContainer from '../../components/ProjContainer';
import DefaultContainer from '../../components/DefaultContainer';
import MenuEditAndDelete from '../../components/menuEditAndDelete';
import { ProjectsContext } from '../../context/AuthProvider/projectsProvider';

function HomePage() {
  const { projectsInfo } = useContext(ProjectsContext);
  console.log(projectsInfo);
  return (
    <main>
      <Header />
      <CardPerfil />
      {projectsInfo && projectsInfo.length > 0 ? (
        projectsInfo.map((projectInfo) => (
          <ProjContainer
            key={projectInfo.project.id}
            projectId={projectInfo.project.id}
            image={projectInfo.project.image}
            tags={projectInfo.tags || []}
            createdAt={projectInfo.project.createdAt}
          />
        ))
      ) : (
        <DefaultContainer />
      )}
      <MenuEditAndDelete />
    </main>
  );
}

export default HomePage;
