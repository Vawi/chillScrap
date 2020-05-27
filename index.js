const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const url = 'https://chillhop.bandcamp.com/album/chillhop-essentials-spring-2020';


const screen = {
    width: 640,
    height: 480
};

let driver = new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().headless().windowSize(screen)).build();

async function scrap() {
    try {
        await driver.get(url);
        await driver.findElement(By.className("playbutton")).click();
        
        await driver.findElement(By.xpath(".//*[@id='track_table']/tbody/tr/td/div/a/span")).then(data => {
            console.log(data.getText());
        });
    } finally {
        await driver.quit();
    }
}

scrap()