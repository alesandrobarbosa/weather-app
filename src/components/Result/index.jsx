import React, { useContext } from 'react';
import { DataContext } from "../Context";
// import { Container } from './styles';

const Result = () => {
    const [data, setData] = useContext(DataContext);

    return (
       <div>
           Result
        {console.log(data)}
       </div>
    );
}

export default Result;