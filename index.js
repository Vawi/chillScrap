const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const url = 'https://chillhop.bandcamp.com/album/chillhop-essentials-spring-2020';

let titleArray = [];

let driver = new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless()).build();

async function scrap() {
    try {
        await driver.get(url);
        //await driver.findElement(By.className("playbutton")).click();

        let elements = await driver.findElements(By.className('track-title'));
        for(let e of elements) {
            titleArray.push(await e.getText());
        }

        console.log(titleArray);

        

    } finally {
        await driver.quit();
    }
}

scrap()