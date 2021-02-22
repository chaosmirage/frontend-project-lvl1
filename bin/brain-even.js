#!/usr/bin/env node

import readlineSync from "readline-sync";
import * as cli from "../src/cli.js";

try {
  console.log("Welcome to the Brain Games!");

  const name = readlineSync.question("May I have your name? ");

  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    throw new Error("Name is required!");
  }

  console.log(`'Answer "yes" if the number is even, otherwise answer "no".'`);

  let correctAnswerCount = 0;

  while (correctAnswerCount < 3 && correctAnswerCount > -1) {
    const randomNumber = cli.getRandomNumber();

    console.log(`Question: ${randomNumber}`);

    const userAnswer = readlineSync.question("Your answer: ");

    const isEven = cli.isEven(Number(randomNumber));
    const isCorrectAnswer =
      (isEven && userAnswer === "yes") || (!isEven && userAnswer === "no");

    if (isCorrectAnswer) {
      console.log("Correct!");
      correctAnswerCount += 1;
    } else {
      correctAnswerCount = -1;
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log("Let's try again, Bill!");
    }
  }

  if (correctAnswerCount === 3) {
    console.log("Congratulations, Sam!");
  }
} catch (e) {
  console.log(e);
}
