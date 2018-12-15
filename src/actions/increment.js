export function increment(amount) {
  return {
    type: 'INCREMENT',
    data: amount,
  };
}
