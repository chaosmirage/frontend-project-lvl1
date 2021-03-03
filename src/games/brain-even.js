import { getRandomInt } from '../lib/random.js';
import { checkIsEven } from '../lib/number.js';
import run, { roundsCount } from '../index.js';

const description =
  'Answer "yes" if the number is even, otherwise answer "no".';

const makeRound = () => {
  const randomNumber = getRandomInt(1, 100);
  const question = String(randomNumber);

  const isEven = checkIsEven(randomNumber);
  const answer = isEven ? 'yes' : 'no';

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
