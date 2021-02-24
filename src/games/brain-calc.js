import run from "../index.js";
import { getRandomInt } from "../lib/random.js";

const getGameRules = () => "What is the result of the expression?";

const getRandomArithmeticOperation = () => {
  const operationType = String(getRandomInt(1, 3));

  const operation = {
    1: "+",
    2: "-",
    3: "*",
  }[operationType];

  if (!operation) {
    throw new Error(`Unexpected operation type ${operationType}`);
  }

  return operation;
};

const evaluate = (leftOperand, operation, rightOperand) => {
  if (operation === "+") {
    return leftOperand + rightOperand;
  }
  if (operation === "-") {
    return leftOperand - rightOperand;
  }

  return leftOperand * rightOperand;
};

const getTask = () => {
  const leftOperand = getRandomInt(1, 101);
  const operation = getRandomArithmeticOperation();
  const rightOperand = getRandomInt(1, 101);

  const question = `${leftOperand} ${operation} ${rightOperand}`;
  const answer = evaluate(leftOperand, operation, rightOperand);

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
  run({ getGameRules, getTask, checkUserAnswer, getWrongAnswerMessage });
};
