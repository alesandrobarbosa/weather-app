import React, { useState, useContext } from 'react';
import { DataContext } from "../../Context";

import SearchIcon from '../../assets/images/search-solid.svg';
import {
    Container,
    Input,
    Button,
    Image
} from './styles';

const InputSearch = () => {
    const [valueInput, setValue] = useState('');
    const { value: [value, setData] } = useContext(DataContext);

    const handleSearch = () => {
        setData(valueInput)
    }

    return (
        <Container>
            <Input type="text"
                placeholder="Weather in you city.."
                value={valueInput}
                onChange={e => setValue(e.target.value)}
            />
            <Button type="submit" onClick={() => handleSearch()}>
                <Image src={SearchIcon} alt="Search icon" />
            </Button>
        </Container>
    );
}

export default InputSearch;