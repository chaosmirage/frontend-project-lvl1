#!/usr/bin/env node

import cli from "../src/cli.js";

try {
  cli("prime");
} catch (error) {
  console.log(error);
}
