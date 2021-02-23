import runCalc from "./games/brain-calc.js";
import runEven from "./games/brain-even.js";
import runGames from "./games/brain-games.js";

export default (gameName) => {
  const run = {
    calc: runCalc,
    even: runEven,
    games: runGames,
  }[gameName];

  if (!run) {
    throw new Error(`Unexpected game: ${gameName}`);
  }

  run();
};
