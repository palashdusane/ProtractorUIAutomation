import { element, by, ElementFinder } from "protractor";

export class test
{
    quickStartDropdown: ElementFinder;
    tutorialOption: ElementFinder;
    tutorialPageHeader: ElementFinder;

    constructor()
    {
        this.quickStartDropdown = element(by.linkText('Quick Start'));
        this.tutorialOption = element(by.linkText('Tutorial'));
        this.tutorialPageHeader = element(by.tagName('h1'));

    }
}