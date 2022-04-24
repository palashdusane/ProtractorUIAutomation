import { browser } from "protractor";
import { calculator } from "./pageObjects/calculator.po";

describe('Calculate operations', async()=>{
    let calcObject = new calculator();
    it('Open calculator demo website', async()=>{
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await expect(browser.getTitle()).toEqual('Super Calculator');
    });0

    it('Add two numbers', async()=>{
        await calcObject.firstCalcInput.sendKeys(3);
        await calcObject.secondCalcInput.sendKeys(3);
        await calcObject.goButton.click();       
        await expect(calcObject.resultElement.getText()).toEqual('6');
    });
});