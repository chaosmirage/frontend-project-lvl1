import run from '../index.js';
import { getRandomInt } from '../lib/random.js';

const getGameRules = () => 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const getTask = () => {
  const randomNumber = getRandomInt(1, 100);

  return {
    question: String(randomNumber),
    answer: randomNumber,
  };
};

const getWrongAnswerMessage = (correctAnswer, userAnswer) => {
  const isPrime = checkIsPrime(correctAnswer);
  const preparedCorrectAnswer = isPrime ? 'yes' : 'no';

  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${preparedCorrectAnswer}'.`;
};

const checkUserAnswer = (correctAnswer, userAnswer) => {
  const isPrime = checkIsPrime(correctAnswer);
  const isCorrectAnswer = (isPrime && userAnswer === 'yes') || (!isPrime && userAnswer === 'no');

  return isCorrectAnswer;
};

export default () => {
  run({
    getGameRules,
    getTask,
    checkUserAnswer,
    getWrongAnswerMessage,
  });
};
