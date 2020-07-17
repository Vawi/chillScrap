#!/usr/bin/env node
const chillCli = require('./src/handlerCli/cli');
const scrap = require('./src/scrap');
const inqHelp = require('./src/handlerCli/inquiererHelper');
const mongo = require('./src/mongoModel/mongoConnection');


function main() {

    mongo.connect();

    chillCli.handleCli();
    inqHelp.basicStep();

    process.on('SIGINT', async function() {
        await scrap.quit();
    });
}

main();