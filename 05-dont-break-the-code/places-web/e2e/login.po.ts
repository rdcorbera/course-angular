import { browser, by, element } from 'protractor';

export class LoginPage {
  navigateTo() {
    return browser.get('/account/login');
  }

  fillInput(id, value) {
    element(by.id(id)).sendKeys(value);
  }

  submitForm() {
    element(by.id('loginForm')).submit();
  }

  alertIsPresent() {
    return element(by.css('.alert')).isPresent();
  }
}
