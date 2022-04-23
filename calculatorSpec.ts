import { browser, by, element } from "protractor";

describe('Calculate operations', async()=>{
    it('Open calculator demo website', async()=>{
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await expect(browser.getTitle()).toEqual('Super Calculator');

        await element(by.model('first')).sendKeys(3);
        await element(by.model('second')).sendKeys(3);
        await element(by.id('gobutton')).click();       
        await expect(element(by.xpath('//h2[@class ="ng-binding"]')).getText()).toEqual('6');
    });
});