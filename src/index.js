import readlineSync from "readline-sync";

export default ({
  maxRoundCount = 3,
  getQuestion,
  getGameRules,
  checkUserAnswer,
  getWrongAnswerMessage,
}) => {
  try {
    console.log("Welcome to the Brain Games!");

    const userName = readlineSync.question("May I have your name? ");

    if (userName) {
      console.log(`Hello, ${userName}!`);
    } else {
      throw new Error("Name is required!");
    }

    if (!getGameRules) {
      return;
    }

    console.log(getGameRules());

    let correctAnswerCount = 0;

    while (correctAnswerCount < maxRoundCount && correctAnswerCount > -1) {
      const { question, answer } = getQuestion();

      console.log(`Question: ${question}`);

      const userAnswer = readlineSync.question("Your answer: ");

      const isCorrectAnswer = checkUserAnswer(answer, userAnswer);

      if (isCorrectAnswer) {
        console.log("Correct!");
        correctAnswerCount += 1;
      } else {
        correctAnswerCount = -1;
        console.log(getWrongAnswerMessage(answer, userAnswer));
        console.log(`Let's try again, ${userName}`);
      }
    }

    if (correctAnswerCount === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  } catch (e) {
    console.log(e);
  }
};
