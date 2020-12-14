import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
  const API_KEY = 'e77c9e2b0aad781c6ee58517d004e4e0';
  const [value, setValueContext] = useState('');
  const [data, setDataContext] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (value !== '') {
      setIsLoading(true);
      axios.get(`${BASE_URL}${value}&appid=${API_KEY}&units=metric`)
        .then(response => {
          setDataContext(response);
          setIsLoading(false);
        })
        .catch(error => {
          if (error.response.status === 404) {
            setDataContext(error.response.status);
            setIsLoading(false);
          }

        })
    }

  }, [value]);

  return (
    <DataContext.Provider
      value={{
        value: setValueContext,
        data: [data, setDataContext],
        isLoading: isLoading,
      }}>
      {props.children}
    </DataContext.Provider>
  )
}


