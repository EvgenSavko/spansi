import { ADD_MARS_ROVERS } from '../constants';

export default store => next => action => {
  // console.log('action', action);
  if (action.type === ADD_MARS_ROVERS) {
    fetch(
      'https://api.nasa.gov/mars-photos/api/v1/rovers/?api_key=NpbsItIuMVQRiGZa05q8v11SNYLNu6k1b2riLeFb'
    )
      .then(response => response.json())
      .then(json => {
        action.data = json;
        next(action);
      });
  } else {
    next(action);
  }
};
