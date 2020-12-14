import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from "../../context";
import {
  Container,
  DescriptionWeather,
  IconWeather,
  FirstTitle,
  SecondTitle,
  TextWeather,
  TextWeatherIcon,
  IconImg,
  ErrorContainer,
  TitleError
} from './styles';

import Loading from '../Loading';

const Result = () => {
  let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let timeZone = new Date().getTimezoneOffset() * 60;

  const IMG_URL = "http://openweathermap.org/img/wn/";

  const { data: [dataContext] } = useContext(DataContext);
  const { isLoading: isloading } = useContext(DataContext);

  const [dataResponse, setDataResponse] = useState({});
  const [date, setDate] = useState(0);
  const [dayWeek, setDayWeek] = useState('');
  const [month, setMonth] = useState('');
  const [bgColorType, setBgColor] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [midday, setMidday] = useState('');

  useEffect(() => {
    if (Object.values(dataContext).length > 0) {
      let dayStatus = new Date(new Date().getTime() + ((dataContext.data.timezone + timeZone) * 1000));
      setDataResponse(dataContext.data);
      setDate(new Date(new Date().getTime() + ((dataContext.data.timezone + timeZone) * 1000)));
      setDayWeek(days[new Date().getDay()]);
      setMonth(months[new Date().getMonth()]);

      getStatusDayToBg(dayStatus);

      setHours(new Date(new Date().getTime() + ((dataContext.data.timezone + timeZone) * 1000)).getHours());
      setMinutes(new Date(new Date().getTime() + ((dataContext.data.timezone + timeZone) * 1000)).getMinutes());
    }

  }, [dataContext]);

  const getStatusDayToBg = (dayStatus) => {
    if (dayStatus.getHours() >= 6 && dayStatus.getHours() <= 18) {
      setBgColor('day');
    } else {
      setBgColor('night');
    }

    if (dayStatus.getHours() >= 0 && dayStatus.getHours() <= 12) {
      setMidday('AM');
    } else {
      setMidday('PM');
    };
  }

  return (

    isloading
      ?
      <Loading />
      :
      dataContext === 404 ?
        <ErrorContainer>
          <TitleError>Please, search for an available city</TitleError>
        </ErrorContainer>
        :
        Object.values(dataResponse).length > 0 &&
        <Container weather={bgColorType}>
          <DescriptionWeather>
            <FirstTitle>{dataResponse.name}, {dataResponse.sys.country}</FirstTitle>
            <TextWeather>{dayWeek} {date.getDate()} {month}</TextWeather>
            <SecondTitle>{Math.floor(dataResponse.main.temp)} °C</SecondTitle>
            <TextWeather>Feels Like: {Math.floor(dataResponse.main.feels_like)} °C</TextWeather>
            <TextWeather>Low: {Math.floor(dataResponse.main.temp_min)} °C / High: {Math.floor(dataResponse.main.temp_max)} °C</TextWeather>
            <TextWeather>Humidity: {dataResponse.main.humidity}%</TextWeather>
            <TextWeather>Wind: {Math.round(dataResponse.wind.speed)} km/h</TextWeather>
          </DescriptionWeather>
          <IconWeather>
            <IconImg src={`${IMG_URL}${dataResponse.weather[0].icon}@2x.png`} alt="" />
            <TextWeatherIcon>{dataResponse.weather[0].description}</TextWeatherIcon>
            <TextWeatherIcon>{hours}:{minutes < 10 ? `0${minutes}` : minutes} {midday}</TextWeatherIcon>
          </IconWeather>
        </Container>

  );
}

export default Result;