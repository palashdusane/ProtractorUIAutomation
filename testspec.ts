import { browser } from "protractor";

describe('chain locators demo',async()=>{
    it('open protractor official website',async()=>{
        await browser.get('https://www.protractortest.org/#/');
        await expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
    });
});