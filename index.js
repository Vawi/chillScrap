const {Builder, By, Key, until} = require('selenium-webdriver');

const url = 'https://chillhop.bandcamp.com/album/chillhop-essentials-spring-2020';

async function scrap() {
    let driver = await new Builder().forBrowser('firefox').build();
    try {
        await driver.get(url);
        await driver.findElement(driver.findElement(By.className('track_row_view linked')));
    } finally {
        await driver.quit();
    }
}

scrap();