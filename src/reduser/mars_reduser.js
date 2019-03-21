import { ADD_MARS_ROVERS } from '../constants';

function mars_reduser(arr = [], action) {
  const { type, data } = action;
  switch (type) {
    case ADD_MARS_ROVERS:
      const newArr = [...arr];
      console.log('mars_reduser', data);
      return newArr;
    default:
      return arr;
  }
}
export default mars_reduser;
