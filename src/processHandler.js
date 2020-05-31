const chillsc = require('./scrap');

// Handle specific process 

process.on('SIGINT', async function() {
    console.log("Caught interrupt signal -- Shutting down driver");
    await chillsc.quit();
});

process.on('uncaughtException', (err, origin) => {
    fs.writeSync(
        process.stderr.fd,
        `Caught exception: ${err}\n` +
        `Exception origin: ${origin}`
    );
});