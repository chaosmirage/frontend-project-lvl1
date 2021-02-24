import { getRandomInt } from '../lib/random.js';
import { checkIsEven } from '../lib/number.js';
import run from '../index.js';

const getGameRules = () => 'Answer "yes" if the number is even, otherwise answer "no".';

const getTask = () => {
  const randomNumber = getRandomInt(1, 100);

  return {
    question: String(randomNumber),
    answer: randomNumber,
  };
};

const getWrongAnswerMessage = (correctAnswer, userAnswer) => {
  const isEven = checkIsEven(correctAnswer);
  const preparedCorrectAnswer = isEven ? 'yes' : 'no';
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${preparedCorrectAnswer}'.`;
};

const checkUserAnswer = (correctAnswer, userAnswer) => {
  const isEven = checkIsEven(correctAnswer);
  const isCorrectAnswer = (isEven && userAnswer === 'yes') || (!isEven && userAnswer === 'no');

  return isCorrectAnswer;
};

export default () => {
  run({
    getGameRules, getTask, checkUserAnswer, getWrongAnswerMessage,
  });
};
