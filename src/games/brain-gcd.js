import run from "../index.js";
import { getRandomInt } from "../lib/random.js";
import { checkIsEven } from "../lib/number.js";

const getGameRules = () => "Find the greatest common divisor of given numbers.";

const evaluateGCD = (leftOperand, rightOperand) => {
  if (leftOperand === 0) {
    return rightOperand;
  }

  if (rightOperand === 0) {
    return leftOperand;
  }

  if (leftOperand === rightOperand) {
    return leftOperand;
  }

  if (leftOperand === 1 || rightOperand === 1) {
    return 1;
  }

  if (checkIsEven(leftOperand) && checkIsEven(rightOperand)) {
    return 2 * evaluateGCD(leftOperand / 2, rightOperand / 2);
  }

  if (checkIsEven(leftOperand) && !checkIsEven(rightOperand)) {
    return evaluateGCD(leftOperand / 2, rightOperand);
  }

  if (checkIsEven(rightOperand) && !checkIsEven(leftOperand)) {
    return evaluateGCD(leftOperand, rightOperand / 2);
  }

  if (
    !(checkIsEven(leftOperand) && checkIsEven(rightOperand)) &&
    rightOperand > leftOperand
  ) {
    return evaluateGCD((rightOperand - leftOperand) / 2, leftOperand);
  }

  return evaluateGCD((leftOperand - rightOperand) / 2, rightOperand);
};

const getQuestion = () => {
  const leftOperand = getRandomInt(1, 101);
  const rightOperand = getRandomInt(1, 101);

  const question = `${leftOperand} ${rightOperand}`;
  const answer = evaluateGCD(leftOperand, rightOperand);

  return {
    question,
    answer,
  };
};

const getWrongAnswerMessage = (correctAnswer, userAnswer) =>
  `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

const checkUserAnswer = (correctAnswer, userAnswer) =>
  correctAnswer === Number(userAnswer);

export default () => {
  run({ getGameRules, getQuestion, checkUserAnswer, getWrongAnswerMessage });
};
