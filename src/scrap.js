// scrap function
const {Builder, By} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

const driver = new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build();

module.exports.startMusic = async function(url) {
    await driver.get(url);
    await driver.findElement(By.className("playbutton")).click();
}

module.exports.pauseMusic = async function() {
    try {
        await driver.findElement(By.className("playbutton playing")).click();
    } catch(error) {
        console.log("No music to pause");
    }
}

module.exports.tracklist = async function(url) {
    const trackList = new Map();
    await driver.get(url);
    let elements = await driver.findElements(By.className('track-title'));
    for(let e of elements) {
        let elem = await e.getText()
        let split = elem.split(' - ');
        trackList.set(split[0], split[1]);
    }

    return trackList;
}

module.exports.quit = async function() {
    console.log("\nBye bye, see you soon !");
    await driver.quit();
    process.exit(0);
}

module.exports.getNewStuff = async function() { // not ready yet
    await driver.get("https://bandcamp.com/");
    let titles = await driver.findElements(By.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]/div[6]/div[9]/div[1]/div[2]/div/a'));  // /html/body/div[3]/div/div[2]/div[1]/div[2]/div[6]/div[9]/div[1]/div[2]/div[1]/a
    let artistes = await driver.findElements(By.className('item-artiste'));
    let genres = await driver.findElements(By.className('item-genre'));
    for(let i = 0; i < titles.length; i++) {
        title = await titles[i].getText();
        genre = await genres[i].getText();
        console.log(title);
    }
}

module.exports.login = async function(username, password) {
    await (await driver).get("https://bandcamp.com/login");
    await driver.findElement(By.id('username-field')).sendKeys(username);
    await driver.findElement(By.id('password-field')).sendKeys(password);
    await driver.findElement(By.className("buttons")).click();

    // Find something to make sure the user is log
}

module.exports.getCurrentUrl = async function() {
    return await driver.getCurrentUrl();
}