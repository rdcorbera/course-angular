import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('places-web Login',  () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

  it('should show invalid credentials', () => {
    page.navigateTo();

    page.fillInput('username', 'admin');
    page.fillInput('password', 'userone');

    page.submitForm();

    expect(page.alertIsPresent()).toBeTruthy();
  });

  it('should redirect to home', () => {
    page.navigateTo();

    page.fillInput('username', 'admin');
    page.fillInput('password', 'admin');

    page.submitForm();

    expect(browser.getCurrentUrl()).toContain('/places');
  });
});
