// eslint-disable-next-line import/prefer-default-export
export function getRandomInt(min, max) {
  const preparedMin = Math.ceil(min);
  const preparedMax = Math.floor(max);
  return (
    Math.floor(Math.random() * (preparedMax - preparedMin + 1)) + preparedMin
  );
}
