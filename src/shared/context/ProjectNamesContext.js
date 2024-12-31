import React, { createContext, useContext, useEffect, useState } from 'react';

import { BACKEND_BASE_DIR } from '../constants';

const ProjectNamesContext = createContext();

export const useProjectNames = () => {
  return useContext(ProjectNamesContext);
};

export const ProjectNamesProvider = (props) => {
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [projectNames, setProjectNames] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_BASE_DIR}/fetch-project-names/`, { method: 'GET' })
      .then((response) => {
        if (!response.ok)
          return response.json().then((result) => {
            throw new Error(result.error);
          });
        else return response.json();
      })
      .then((result) => {
        setProjectNames(
          result.projectNames.concat({ name: 'All Projects >>', slug: '' }),
        );
        setFetchLoading(false);
      })
      .catch(() => {
        setFetchError(true);
        setFetchLoading(false);
      });
  }, []);

  return (
    <ProjectNamesContext.Provider
      value={{ projectNames, fetchLoading, fetchError }}
    >
      {props.children}
    </ProjectNamesContext.Provider>
  );
};
