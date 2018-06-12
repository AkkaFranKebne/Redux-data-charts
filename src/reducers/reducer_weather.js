import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action){
  // console.log('action', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // same in es6 as return state.concat([action.payload.data]) not push because you cannot manipulate state, need to override it;
      return [action.payload.data, ...state];
  }
  return state;
}