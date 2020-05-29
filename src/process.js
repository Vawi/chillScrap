const chillsc = require('./scrap');

// Handle specific process 

process.on('SIGINT', async function() {
    await chillsc.quit();
    console.log("Caught interrupt signal -- Shutting down driver");
});

process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught exception: ${err}\n` +
        `Exception origin: ${origin}`
    );
});