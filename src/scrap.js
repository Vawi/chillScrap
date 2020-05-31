// scrap function
const {Builder, By} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

//const url = 'https://chillhop.bandcamp.com/album/chillhop-essentials-spring-2020';

const trackList = new Map();
const driver = new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build();

module.exports.startMusic = async function(url) {
    await driver.get(url);
    await driver.findElement(By.className("playbutton")).click();
}

module.exports.pauseMusic = async function() {
    await driver.findElement(By.className("playbutton playing")).click();
}

module.exports.tracklist = async function(url) {
    await driver.get(url);
    let elements = await driver.findElements(By.className('track-title'));
    for(let e of elements) {
        let elem = await e.getText()
        let split = elem.split(' - ');
        trackList.set(split[0], split[1]);
    }

    console.log(trackList);
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

module.exports.getCurrentUrl = async function() {
    return await driver.getCurrentUrl();
}