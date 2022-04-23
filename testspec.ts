import { browser } from "protractor";

describe('chain locators demo',async()=>{
    it('open protractor official website',async()=>{
        browser.get('https://www.protractortest.org/#/');
        expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
    });
});