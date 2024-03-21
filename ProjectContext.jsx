// ProjectContext.js
import React, { createContext, useState, useContext } from 'react';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [showCompleteProject, setShowCompleteProject] = useState(false);
  const [showCompleteProject2, setShowCompleteProject2] = useState(false);

  return (
    <ProjectContext.Provider
      value={{
        showCompleteProject,
        setShowCompleteProject,
        showCompleteProject2,
        setShowCompleteProject2,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};

export const useProject = () => useContext(ProjectContext);
