import { INCREMENT } from '../constants';

export default store => next => action => {
  // if (action.type === INCREMENT) console.log('gotcha !!!');
  next(action);
};
