import { ADD_APOD, PREV_APOD } from '../constants';

const initObject = {
  // date: '',
};

function apod_reduser(arr = [initObject], action) {
  const { type, data } = action;
  switch (type) {
    case ADD_APOD:
      const newArr = [...arr];
      newArr.unshift(data);
      const filterArr = newArr.filter(item => item.date);
      return filterArr;
    case PREV_APOD:
      const sortPrev = [...arr];
      if (sortPrev[1].date) {
        sortPrev.push(sortPrev[0]);
        sortPrev.shift();
        return sortPrev;
      } else return sortPrev;
    default:
      return arr;
  }
}
export default apod_reduser;
