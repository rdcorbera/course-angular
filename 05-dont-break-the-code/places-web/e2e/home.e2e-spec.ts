import { HomePage } from './home.po';

describe('places-web Home', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display brand', () => {
    page.navigateTo();
    expect(page.getBrandText()).toEqual('places.com');
  });

  it('should display three places by day', () => {
    page.navigateTo();

    expect(page.countCardElements('placesByDayContainer')).toEqual(3);
  });

  it('should display three places by week', () => {
    page.navigateTo();

    expect(page.countCardElements('placesByWeekContainer')).toEqual(3);
  });

  it('should hide Manage menu item', () => {
    page.navigateTo();

    expect(page.getManageMenuItem().isPresent()).toBeFalsy();
  });
});
