import { TestBed, inject } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { HttpClientModule } from '@angular/common/http';
import { Profile } from '../models/profile';

describe('ProfileService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ProfileService]
    });

    const store = {};

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      }
    };

    spyOn(localStorage, 'getItem')
      .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
      .and.callFake(mockLocalStorage.setItem);
  });

  it('should be created', inject([ProfileService], (service: ProfileService) => {
    expect(service).toBeTruthy();
  }));

  it('should set a profile', inject([ProfileService], (service: ProfileService) => {
    const profile = new Profile(1, 'user', 'Jhon', 'Doe', 'jhon.doe@domain.com', new Date(), null, null, null);

    service.setProfile(profile);

    expect(localStorage.getItem('profile')).toEqual(JSON.stringify(profile));
  }));

  it('should get a profile first name', inject([ProfileService], (service: ProfileService) => {
    const profile = new Profile(1, 'user', 'Jhon', 'Doe', 'jhon.doe@domain.com', new Date(), null, null, null);

    service.setProfile(profile);

    expect(service.getProfile().firstname).toEqual(profile.firstname);
  }));

  it('should not be an admin', inject([ProfileService], (service: ProfileService) => {
    expect(service.isAdmin()).not.toEqual(true);
  }));

  it('should be an admin', inject([ProfileService], (service: ProfileService) => {
    const profile = new Profile(1, 'admin', 'Admin', 'Admin', 'admin@domain.com', new Date(), null, null, null);

    service.setProfile(profile);

    expect(service.isAdmin()).toEqual(true);
  }));
});
