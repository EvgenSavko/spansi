import { INCREMENT } from '../constants';

function counter(number = 0, action) {
  const { type, data } = action;
  return type === INCREMENT ? number + data : number;
}
export default counter;
