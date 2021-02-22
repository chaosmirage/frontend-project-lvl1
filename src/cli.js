import readlineSync from "readline-sync";

export default () => {
  try {
    console.log("Welcome to the Brain Games!");
    const name = readlineSync.question("May I have your name? ");
    if (name) {
      console.log(`Hello, ${name}`);
    }
  } catch (e) {
    console.error(e);
  }
};
