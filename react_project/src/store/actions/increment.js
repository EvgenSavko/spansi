import { INCREMENT } from '../../constants';

export function increment(amount) {
  return {
    type: INCREMENT,
    data: amount,
  };
}
