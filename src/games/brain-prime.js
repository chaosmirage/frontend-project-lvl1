import run, { roundsCount } from '../index.js';
import { getRandomInt } from '../lib/random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const checkIsPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const makeRound = () => {
  const randomNumber = getRandomInt(1, 100);

  const question = String(randomNumber);
  const answer = checkIsPrime(randomNumber) ? 'yes' : 'no';

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
