import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "../../context";
// import { Container } from './styles';

const Result = () => {
    const { data: [dataContext] } = useContext(DataContext);
    const [dataResponse, setDataResponse] = useState({});

    useEffect(() => {
        if (Object.values(dataContext).length > 0) {
            setDataResponse(dataContext.data)
            console.log(dataContext)
        } 
 
    }, [dataContext])

    return (
        <div>

            
            {dataResponse &&
                <h1>{dataResponse.name}</h1>
            }
        </div>
    );
}

export default Result;