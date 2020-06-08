#!/usr/bin/env node
const chillCli = require('./src/handlerCli/cli');
const inqHelp = require('./src/handlerCli/inquiererHelper');


function main() {

    chillCli.handleCli();
    inqHelp.basicStep();

    process.on('SIGINT', async function() {
        await chillCli.quit();
    });
}

main();