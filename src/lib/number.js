// eslint-disable-next-line import/prefer-default-export
export const checkIsEven = (number) => {
  if (!number) {
    throw new Error('Number is empty');
  }

  if (typeof number !== 'number') {
    throw new Error(`Unexpected type ${typeof number}`);
  }

  return number % 2 === 0;
};
