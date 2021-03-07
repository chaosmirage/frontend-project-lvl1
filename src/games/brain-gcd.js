import run, { roundsCount } from '../index.js';
import { getRandomInt } from '../lib/random.js';

const description = 'Find the greatest common divisor of given numbers.';

const evaluateGCD = (x, y) => (y === 0 ? x : evaluateGCD(y, x % y));

const makeRound = () => {
  const leftOperand = getRandomInt(1, 100);
  const rightOperand = getRandomInt(1, 100);

  const question = `${leftOperand} ${rightOperand}`;
  const answer = String(evaluateGCD(leftOperand, rightOperand));

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
