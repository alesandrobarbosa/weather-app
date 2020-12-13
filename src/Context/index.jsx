import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const API_KEY = 'e77c9e2b0aad781c6ee58517d004e4e0';
    const [value, setValue] = useState({});
    const [data, setData] = useState({});

    useEffect(() => {
        if (Object.values(value).length > 0) {
            axios.get(`${BASE_URL}${value}&appid=${API_KEY}`)
                .then(function (response) {
                    setData(response)
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [value]);

    return (
        <DataContext.Provider value={{ value: [value, setValue], data: [data, setData] }}>
            {props.children}
        </DataContext.Provider>
    )
}


