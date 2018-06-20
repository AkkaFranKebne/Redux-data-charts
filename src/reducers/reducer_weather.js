//a single reducer, takes care of weather data while find a specific action in container

import { FETCH_WEATHER } from "../actions/index";
//import this variable from actions


//reducer is a function that says: when you meet FETCH_WEATHER action in container, do sth (here: return weather data for the next city, do not remove the old ones, that is why we have array instead of null)
export default function(state = [], action){
  // console.log('action', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // same in es6 as return state.concat([action.payload.data]) not push because you cannot manipulate state, need to override it;
      // ... destructuring existing array
      return [action.payload.data, ...state];
  }
  return state;
}