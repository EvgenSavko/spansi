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
      return removeDuplicates(sortAPODByDate(filterArr), 'date');
    case PREV_APOD:
      const sortPrev = [...arr];
      sortPrev.unshift(sortPrev[sortPrev.length - 1]);
      sortPrev.pop();
      return sortPrev;
    case NEXT_APOD:
      const sortNext = [...arr];
      sortNext.push(sortNext[0]);
      sortNext.shift();
      return sortNext;
    case SELECT_APOD:
      const sortSelect = [...arr];
      console.log(data, sortSelect);
      for (let i = 0; i < sortSelect.length; i++) {
        if (data === sortSelect[i].date) {
          console.log(1);
          sortSelect.unshift(sortSelect[sortSelect.length - 1]);
          sortSelect.pop();
        } else {
          console.log(2);
          // sortSelect.unshift(sortSelect[sortSelect.length - 1]);
          // sortSelect.pop();
          // break;
        }
      }
      return sortSelect;
    default:
      return arr;
  }
}
export default apod_reduser;

function sortAPODByDate(arr) {
  const newArr = [...arr];
  return newArr.sort(function(a, b) {
    let c = a.date,
      d = b.date;
    if (c < d) {
      return -1;
    } else if (c > d) {
      return 1;
    }
    return 0;
  });
}

function removeDuplicates(originalArray, prop) {
  var newArray = [];
  var lookupObject = {};

  for (var i in originalArray) {
    lookupObject[originalArray[i][prop]] = originalArray[i];
  }

  for (i in lookupObject) {
    newArray.push(lookupObject[i]);
  }
  return newArray;
}
