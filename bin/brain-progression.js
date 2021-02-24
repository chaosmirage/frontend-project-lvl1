#!/usr/bin/env node

import cli from "../src/cli.js";

try {
  cli("progression");
} catch (error) {
  console.log(error);
}
