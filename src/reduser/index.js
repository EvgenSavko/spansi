import { combineReducers } from 'redux';
import apod_reduser from './apod_reduser';
// import мелкие редюсеры …

const rootReducer = combineReducers({
  apod: apod_reduser,
});

export default rootReducer;
