import { ADD_APOD, PREV_APOD, NEXT_APOD, SELECT_APOD } from '../../constants';

export function getAPOD(date) {
  return {
    type: ADD_APOD,
    data: date,
  };
}

export function prevAPOD() {
  return {
    type: PREV_APOD,
  };
}

export function nextAPOD() {
  return {
    type: NEXT_APOD,
  };
}

export function selectAPOD(dateChoice) {
  return {
    type: SELECT_APOD,
    data: dateChoice,
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
