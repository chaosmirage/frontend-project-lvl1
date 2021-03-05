import { getRandomInt } from '../lib/random.js';
import run, { roundsCount } from '../index.js';

const description = 'What is the result of the expression?';

const getRandomArithmeticOperator = () => {
  const operators = '+-*';

  const operatorIndex = getRandomInt(0, operators.length - 1);
  const operator = operators[operatorIndex];

  return operator;
};

const evaluate = (leftOperand, operator, rightOperand) => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  }
};

const makeRound = () => {
  const leftOperand = getRandomInt(1, 100);
  const rightOperand = getRandomInt(1, 100);
  const operator = getRandomArithmeticOperator();

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const answer = String(evaluate(leftOperand, operator, rightOperand));
  return [question, answer];
};

export default () => {
  const rounds = [];

  for (let i = 0; i < roundsCount; i += 1) {
    rounds.push(makeRound());
  }

  run({
    description,
    rounds,
  });
};
