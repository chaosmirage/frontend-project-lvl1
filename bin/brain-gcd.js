#!/usr/bin/env node

import cli from '../src/cli.js';

try {
  cli('gcd');
} catch (error) {
  console.log(error);
}
