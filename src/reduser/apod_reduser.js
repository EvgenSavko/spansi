import { ADD_APOD } from '../constants';

const initObject = {
  date: '',
};

function apod_reduser(arr = [initObject], action) {
  const { type, data } = action;
  switch (type) {
    case ADD_APOD:
      console.log('apod reduser', data);
      const test = [...arr];
      test.unshift(data);
      console.log('apod reduser test', test);
      return test;
    default:
      return arr;
  }
}
export default apod_reduser;
