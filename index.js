#!/usr/bin/env node
const chillCli = require('./src/handlerCli/cli');
const inqHelp = require('./src/handlerCli/inquiererHelper');

chillCli.handleCli();
inqHelp.basicStep();