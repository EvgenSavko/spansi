import { combineReducers } from 'redux';
import counter from './count';
// import мелкие редюсеры …

const rootReducer = combineReducers({
  count: counter,
});

export default rootReducer;
