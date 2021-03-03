import readlineSync from 'readline-sync';

export const roundsCount = 3;

export default ({ description, rounds }) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  if (userName) {
    console.log(`Hello, ${userName}!`);
  } else {
    throw new Error('Name is required!');
  }

  console.log(description);

  // eslint-disable-next-line no-restricted-syntax
  for (const [question, correctAnswer] of rounds) {
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const isUserAnswerWrong = userAnswer !== correctAnswer;

    if (isUserAnswerWrong) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
