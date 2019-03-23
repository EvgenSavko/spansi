import { ADD_MARS_ROVERS } from '../constants';

function mars_reduser(arr = [], action) {
  const { type, data } = action;
  switch (type) {
    case ADD_MARS_ROVERS:
      const roversArr = [...data.rovers];
      console.log('mars_reduser', roversArr);
      return roversArr;
    default:
      return arr;
  }
}
export default mars_reduser;
