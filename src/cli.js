import runCalc from './games/brain-calc.js';
import runEven from './games/brain-even.js';
import runGames from './games/brain-games.js';
import runGCD from './games/brain-gcd.js';
import runProgression from './games/brain-progression.js';
import runPrime from './games/brain-prime.js';

export default (gameName) => {
  const run = {
    calc: runCalc,
    even: runEven,
    games: runGames,
    gcd: runGCD,
    progression: runProgression,
    prime: runPrime,
  }[gameName];

  if (!run) {
    throw new Error(`Unexpected game: ${gameName}`);
  }

  run();
};
