import { browser, by, element } from 'protractor';

export class HomePage {
  navigateTo() {
    return browser.get('/places/home');
  }

  getBrandText() {
    return element(by.css('.navbar-brand')).getText();
  }

  getManageMenuItem() {
    return element(by.id('manageMenuItem'));
  }

  countCardElements(idContainer) {
    const container = element(by.id(idContainer));
    const cards = container.all(by.css('.card'));

    return cards.count();
  }
}
