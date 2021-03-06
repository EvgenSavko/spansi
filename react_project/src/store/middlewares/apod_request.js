import { ADD_APOD } from '../../constants';

export default store => next => action => {
  // console.log('action', action);
  if (action.type === ADD_APOD && !action.data) {
    fetch('https://api.nasa.gov/planetary/apod?api_key=NpbsItIuMVQRiGZa05q8v11SNYLNu6k1b2riLeFb')
      .then(response => response.json())
      .then(json => {
        action.data = json;
        next(action);
      });
  } else if (action.type === ADD_APOD && action.data) {
    fetch(
      `https://api.nasa.gov/planetary/apod?date=${
        action.data
      }&api_key=NpbsItIuMVQRiGZa05q8v11SNYLNu6k1b2riLeFb`
    )
      .then(response => response.json())
      .then(json => {
        action.data = json;
        next(action);
      });
  } else {
    next(action);
  }

  // action.data = { date: '2' };
  // next(action);
};
