import { element, by, ElementFinder } from "protractor";

export class calculator
{
    firstCalcInput: ElementFinder;
    secondCalcInput: ElementFinder;
    goButton: ElementFinder;
    resultElement: ElementFinder;

    constructor()
    {
        this.firstCalcInput = element(by.model('first'));
        this.secondCalcInput = element(by.model('second'));
        this.goButton = element(by.id('gobutton'));
        this.resultElement = element(by.xpath('//h2[@class ="ng-binding"]'));
    }

}