import React, { useContext, useState } from 'react';
import axios from 'axios';
import { DataContext } from "../Context";

import SearchIcon from '../../assets/images/search-solid.svg';
import { Container, Input, Button, Image } from './styles';


const InputSearch = () => {
    const [data, setData] = useContext(DataContext);
    const [value, setValue] = useState('');

    const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
    const API_KEY = 'e77c9e2b0aad781c6ee58517d004e4e0';

    const handleSearch = () => {
        axios.get(`${BASE_URL}${value}&appid=${API_KEY}`)
            .then(function (response) {
                setData(...data, response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <Container>
            <Input type="text"
                placeholder="Weather in you city.."
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Button type="submit" onClick={() => handleSearch()}>
                <Image src={SearchIcon} alt="Search icon" />
            </Button>
        </Container>
    );
}

export default InputSearch;