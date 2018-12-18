import { ADD_APOD } from '../constants';

function apod_reduser(arr = [], action) {
  const { type, data } = action;
  switch (type) {
    case ADD_APOD:
      console.log('apod reduser', data);
      const test = arr;
      test.push(data);
      return test;
    default:
      return arr;
  }
}
export default apod_reduser;
