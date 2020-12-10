import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "../../Context";
// import { Container } from './styles';

const Result = () => {
    const { data: [dataContext] } = useContext(DataContext);
    const [dataResponse, setDataResponse] = useState({});

    useEffect(() => {
        setDataResponse(dataContext.data)
        console.log(dataResponse)
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