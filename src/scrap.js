// scrap function
const {Builder, By} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

const driver = new Builder().forBrowser("firefox").setFirefoxOptions(new firefox.Options().headless()).build();
let isLog = false;

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
        let elem = await e.getText();
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
    let titles = await driver.findElements(By.xpath('/html/body/div[3]/div/div[2]/div[1]/div[2]/div[6]/div[9]/div[1]/div[2]/div/a')); 
    for(let i = 0; i < titles.length; i++) {
        title = await titles[i].getText();
        url = await titles[i].getAttribute("href");
        // genre = await genres[i].getText();
        console.log(title + " : " + url);
    }
}

module.exports.login = async function(username, password) {
    await driver.get("https://bandcamp.com/login");
    await driver.findElement(By.id('username-field')).sendKeys(username);
    await driver.findElement(By.id('password-field')).sendKeys(password);
    await driver.findElement(By.tagName('button')).click();
    if (await this.getCurrentUrl() == "https://bandcamp.com/" + username) {
        isLog = true;
        return true;
    }
}

module.exports.disconnect = async function() {
    if(isLog) {
        await driver.get("https://bandcamp.com/logout");
        isLog = false;
        return true;
    } else {
        return false;
    }
    
}

module.exports.getCurrentUrl = async function() {
    return await driver.getCurrentUrl();
}