function counter(number = 0, action) {
  const { type, data } = action;
  console.log(number, data);
  return type === 'INCREMENT' ? number + data : number;
}
export default counter;
