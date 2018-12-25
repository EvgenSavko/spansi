import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reduser/index';
import apod_request from './../middlewares/apod_request';
// import thunk from 'redux-thunk';

const enhancer = applyMiddleware(apod_request);
const store = createStore(rootReducer, {}, enhancer);
export default store;
