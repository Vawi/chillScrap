// scrap function
const {Builder, By} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

const url = 'https://chillhop.bandcamp.com/album/chillhop-essentials-spring-2020';

const trackList = new Map();
const driver = new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build();

module.exports.scrap = async function() {
    await driver.get(url);
    await driver.findElement(By.className("playbutton")).click();
}

module.exports.tracklist = async function() {
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
}