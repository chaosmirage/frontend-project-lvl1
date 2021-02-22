#!/usr/bin/env node

import readlineSync from "readline-sync";
import run from "../src/cli.js";

try {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  run({ name });
} catch (e) {
  console.log(e);
}
