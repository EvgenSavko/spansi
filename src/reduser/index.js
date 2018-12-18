import { combineReducers } from 'redux';
import counter from './count';
import apod_reduser from './apod_reduser';
// import мелкие редюсеры …

const rootReducer = combineReducers({
  count: counter,
  apod: apod_reduser,
});

export default rootReducer;
