import { browser } from "protractor";
import { test } from "./pageObjects/test.po";

describe('Protractor website demo',async()=>{

    let testObject = new test();

    it('open protractor official website',async()=>{
        await browser.get('https://www.protractortest.org/#/');
        await expect(browser.getTitle()).toEqual('Protractor - end-to-end testing for AngularJS');
    });

    it('Navigate the tutorial page',async()=>{
        await testObject.quickStartDropdown.click();
        await testObject.tutorialOption.click();
        await expect(testObject.tutorialPageHeader.getText()).toEqual('Tutorial');
    });
});