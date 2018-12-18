import { ADD_APOD } from '../constants';

export function getAPOD(date) {
  return {
    type: ADD_APOD,
    data: date,
  };
}
