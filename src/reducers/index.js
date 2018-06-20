import { combineReducers } from 'redux';
import Weather from './reducer_weather';

//here there will be a list of all  reducers  - take care of data transfer inside application
const rootReducer = combineReducers({
  weather: Weather
});

export default rootReducer;
