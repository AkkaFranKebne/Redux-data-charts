//actions are attached to different containers, reducers use them to collect the data

// axios library make asynchronus requests to ajax and return a promise , that middleware will unwrap when it is resolved
import axios from 'axios';

const API_KEY =''; //here comes api key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

//good to have constant for action type, as it is used in reducer as well
export const FETCH_WEATHER = 'FETCH_WEATHER';


//function that collects the weather data for specific city
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  //using middleware - redux promise to get data from ajax, it sends data to payload when promise is resolved (take care of asynchronous code)
  const request = axios.get(url);
  // console.log('request', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}