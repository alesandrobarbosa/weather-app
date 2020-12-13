import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const API_KEY = 'e77c9e2b0aad781c6ee58517d004e4e0';
    const [value, setValueContext] = useState('');
    const [data, setDataContext] = useState({});

    useEffect(() => {
        if (value !== '') {
            axios.get(`${BASE_URL}${value}&appid=${API_KEY}`)
                .then(function (response) {
                    setDataContext(response)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }

    }, [value]);

    return (
        <DataContext.Provider value={{ value: setValueContext, data: [data, setDataContext] }}>
            {props.children}
        </DataContext.Provider>
    )
}


