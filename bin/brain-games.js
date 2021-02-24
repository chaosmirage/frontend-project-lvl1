#!/usr/bin/env node

import cli from "../src/cli.js";

try {
  cli("games");
} catch (error) {
  console.log(error);
}
