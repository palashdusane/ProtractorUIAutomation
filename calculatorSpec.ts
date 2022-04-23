import { browser } from "protractor";

describe('Calculate operations', function(){
    it('Open calculator demo website', function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});