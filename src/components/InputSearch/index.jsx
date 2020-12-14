import React, { useState, useContext } from 'react';
import { DataContext } from "../../context";

import SearchIcon from '../../assets/images/search-solid.svg';
import {
  Container,
  ContainerInput,
  Input,
  Button,
  Image
} from './styles';

const InputSearch = () => {
  const [valueInput, setValueInput] = useState('');
  const { value: setValueContext } = useContext(DataContext);

  const handleSearch = () => {
    setValueContext(valueInput);
  }

  return (
    <Container>
      <ContainerInput>
        <Input type="text"
          placeholder="Weather in you city.."
          value={valueInput}
          onChange={e => setValueInput(e.target.value)}
        />
        <Button type="submit" onClick={() => handleSearch()}>
          <Image src={SearchIcon} alt="Search icon" />
        </Button>
      </ContainerInput>
    </Container>
  );
}

export default InputSearch;