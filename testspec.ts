import { browser } from "protractor"

describe('chain locators demo',function(){

    it('open protractor official website',function(){
        browser.get('https://www.protractortest.org/#/');
    });
});