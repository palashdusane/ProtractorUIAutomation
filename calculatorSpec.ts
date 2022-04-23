import { browser } from "protractor";

describe('Calculate operations', async()=>{
    it('Open calculator demo website', async()=>{
        await browser.get('http://juliemr.github.io/protractor-demo/');
        await expect(browser.getTitle()).toEqual('Super Calculator');
    });
});