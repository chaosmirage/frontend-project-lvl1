#!/usr/bin/env node

import cli from "../src/cli.js";

try {
  cli("even");
} catch (error) {
  console.log(error);
}
