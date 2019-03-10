import { ADD_APOD, PREV_APOD, NEXT_APOD, SELECT_APOD } from '../constants';

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
      sortPrev.push(sortPrev[0]);
      sortPrev.shift();
      return sortPrev;
    case NEXT_APOD:
      const sortNext = [...arr];
      sortNext.unshift(sortNext[sortNext.length - 1]);
      sortNext.pop();
      return sortNext;
    case SELECT_APOD:
      const sortSelect = [...arr];
      for (let i = 0; i < sortSelect.length; i++) {
        if (data !== sortSelect[i].date) {
          sortSelect.push(sortSelect[0]);
          sortSelect.shift();
        } else {
          sortSelect.push(sortSelect[0]);
          sortSelect.shift();
          break;
        }
      }
      return sortSelect;
    default:
      return arr;
  }
}
export default apod_reduser;
