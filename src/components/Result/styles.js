import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 30px;
  margin-top: 30px;
  display: flex;
  width: 100%;
  background: rgb(238,174,202);
  background: ${props => props.weather === 'day' ? 'linear-gradient(0deg, rgba(45,56,253,1) 0%, rgba(214,244,245,1) 100%)' : 'linear-gradient(0deg, rgba(0,0,0,1) 15%, rgba(41,45,97,1) 74%, rgba(53,53,98,1) 100%)'};
`;

export const TextWeather = styled.p `
  color: #ffffff;
  font-family: sans-serif;
`;

export const DescriptionWeather = styled.div`
  width: 50%;
  margin: 15px 40px;  
`;

export const FirstTitle = styled.h1 `
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1.6rem;
`;

export const SecondTitle = styled.h2`
  border-top: 1px solid;
  font-size: 3rem;
  margin: 15px 0px;
  padding-top: 8px;
  color: #ffffff;
  font-family: sans-serif;
`;

export const IconWeather = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const IconImg = styled.img `
  margin: 70px auto 0px auto;
  align-self: center;
  width: 100px;
`;

export const TextWeatherIcon = styled.p `
  text-align: center;
  text-transform: capitalize;
  color: #ffffff;
  font-family: sans-serif;
`;

export const ErrorContainer = styled.div `
  margin: auto;
`;

export const TitleError = styled.p `
    text-align: center;
    font-size: 20px;
    color: #ffffff;
`;