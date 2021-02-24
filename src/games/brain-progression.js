import run from '../index.js';
import { getRandomInt } from '../lib/random.js';

const getGameRules = () => 'What number is missing in the progression?';

const makeProgression = (length) => {
  const firstNumber = getRandomInt(1, 100);
  const step = getRandomInt(1, 100);

  const result = [firstNumber];

  for (let index = 0; index < length - 1; index += 1) {
    result.push(result[result.length - 1] + step);
  }

  return result;
};

const getTask = () => {
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

  const answer = progression[hiddenElementIndex];

  return {
    question,
    answer,
  };
};

const getWrongAnswerMessage = (correctAnswer, userAnswer) => `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

const checkUserAnswer = (correctAnswer, userAnswer) => correctAnswer === Number(userAnswer);

export default () => {
  run({
    getGameRules, getTask, checkUserAnswer, getWrongAnswerMessage,
  });
};
