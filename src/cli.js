export const getRandomNumber = () => Math.round(Math.random() * 100);

export const isEven = (number) => {
  if (!number) {
    throw new Error("Number is empty");
  }

  if (typeof number !== "number") {
    throw new Error(`Unexpected type ${typeof number}`);
  }

  return number % 2 === 0;
};
