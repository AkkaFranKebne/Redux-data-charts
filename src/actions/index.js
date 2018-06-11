// axios library make requests to ajax and return a promise
import axios from 'axios';

const API_KEY =''; //here comes api key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FEATCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}