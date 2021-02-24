#!/usr/bin/env node

import cli from '../src/cli.js';

try {
  cli('calc');
} catch (error) {
  console.log(error);
}
