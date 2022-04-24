import { browser, by, element } from "protractor";

describe('chain locators demo',async()=>{
    it('open protractor official website',async()=>{
        await browser.get('https://www.protractortest.org/#/');
        await expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
    });

    it('Navigate the tutorial page',async()=>{
        await element(by.linkText('Quick Start')).click();
        await element(by.linkText('Tutorial')).click();
        await expect(element(by.tagName('h1')).getText()).toEqual('Tutorial');
    });
});