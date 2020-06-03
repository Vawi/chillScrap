const chillsc = require('./scrap');

// Handle specific process 

module.exports.sigint = function() {
    process.on('SIGINT', async function() {
    console.log("\n\nCaught interrupt signal -- Shutting down driver");
    await chillsc.quit();
})};