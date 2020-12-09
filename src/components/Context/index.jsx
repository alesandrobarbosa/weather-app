import React, { createContext, useState } from 'react';

// import { Container } from './styles';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [data, setData] = useState({});
    return (
        <DataContext.Provider value={[data, setData]}>
            {props.children}
        </DataContext.Provider>
    )
}


