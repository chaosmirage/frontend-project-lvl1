import { getRandomInt } from "../lib/random.js";
import run from "../index.js";

const getGameRules = () =>
  'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const randomNumber = getRandomInt(1, 100);

  return {
    question: String(randomNumber),
    answer: randomNumber,
  };
};

const checkIsEven = (number) => {
  if (!number) {
    throw new Error("Number is empty");
  }

  if (typeof number !== "number") {
    throw new Error(`Unexpected type ${typeof number}`);
  }

  return number % 2 === 0;
};

const getWrongAnswerMessage = (correctAnswer, userAnswer) => {
  const isEven = checkIsEven(correctAnswer);
  const preparedCorrectAnswer = isEven ? "yes" : "no";
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${preparedCorrectAnswer}'.`;
};

const checkUserAnswer = (correctAnswer, userAnswer) => {
  const isEven = checkIsEven(correctAnswer);
  const isCorrectAnswer =
    (isEven && userAnswer === "yes") || (!isEven && userAnswer === "no");

  return isCorrectAnswer;
};

export default () => {
  run({ getGameRules, getQuestion, checkUserAnswer, getWrongAnswerMessage });
};
