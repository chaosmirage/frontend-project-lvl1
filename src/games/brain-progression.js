import run, { roundsCount } from '../index.js';
import { getRandomInt } from '../lib/random.js';

const description = 'What number is missing in the progression?';

const makeProgression = (length) => {
  const firstNumber = getRandomInt(1, 100);
  const step = getRandomInt(1, 100);

  const result = [firstNumber];

  for (let index = 0; index < length - 1; index += 1) {
    result.push(result[result.length - 1] + step);
  }

  return result;
};

const makeRound = () => {
  const progressionLength = getRandomInt(5, 10);
  const progression = makeProgression(progressionLength);
  const hiddenElementIndex = getRandomInt(0, progressionLength - 1);

  const question = progression
    .reduce((acc, number, index) => {
      if (index === hiddenElementIndex) {
        return [...acc, '..'];
      }

      return [...acc, number];
    }, [])
    .join(' ');

  const answer = String(progression[hiddenElementIndex]);

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
