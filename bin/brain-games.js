#!/usr/bin/env node

import readlineSync from "readline-sync";

try {
  const name = readlineSync.question("May I have your name? ");

  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    throw new Error("Name is required!");
  }
} catch (e) {
  console.log(e);
}
