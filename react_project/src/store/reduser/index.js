import { combineReducers } from 'redux';
import apod_reduser from './apod_reduser';
import mars_reduser from './mars_reduser';
// import мелкие редюсеры …

const rootReducer = combineReducers({
  apod: apod_reduser,
  mars: mars_reduser,
});

export default rootReducer;
