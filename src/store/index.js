import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reduser/index';
import gotcha from './../middlewares/gotcha';

const enhancer = applyMiddleware(gotcha);
const store = createStore(rootReducer, {}, enhancer);
export default store;
