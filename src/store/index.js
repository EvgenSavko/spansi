import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reduser/index';
import gotcha from './../middlewares/gotcha';
import apod_request from './../middlewares/apod_request';

const enhancer = applyMiddleware(gotcha, apod_request);
const store = createStore(rootReducer, {}, enhancer);
export default store;
