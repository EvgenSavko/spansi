function counter(number = 0, action) {
  const { type, data } = action;
  return type === 'INCREMENT' ? number + data.amount : number;
}
export default counter;
