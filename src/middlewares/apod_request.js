import { ADD_APOD } from '../constants';

export default store => next => action => {
  if (action.type === ADD_APOD && !action.data) {
    fetch('https://api.nasa.gov/planetary/apod?api_key=NpbsItIuMVQRiGZa05q8v11SNYLNu6k1b2riLeFb')
      .then(response => response.json())
      .then(json => {
        action.data = json;
        next(action);
      });
  }
  // next(action);
};
