import { ADD_APOD } from '../constants';

export function getAPOD(date) {
  return {
    type: ADD_APOD,
    data: date,
  };
}

// export function getAPOD(date) {
//   return dispatch => {
//     fetch('https://api.nasa.gov/planetary/apod?api_key=NpbsItIuMVQRiGZa05q8v11SNYLNu6k1b2riLeFb')
//       .then(response => response.json())
//       .then(json => {
//         // action.data = json;
//         // next(action);
//         dispatch({
//           type: ADD_APOD,
//           data: json,
//         });
//       });
//   };
// }
