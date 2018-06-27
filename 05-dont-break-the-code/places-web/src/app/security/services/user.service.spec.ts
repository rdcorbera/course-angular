import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UserService } from './user.service';
import { ProfileService } from './profile.service';
import { User } from '../models/user';
import { Profile } from '../models/profile';
import { environment } from '../../../environments/environment.prod';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ProfileService, UserService]
    });
  });

  it('should be created', inject([UserService], (service: UserService) => {
    expect(service).toBeTruthy();
  }));

  it('should return expected profile', inject(
    [UserService, HttpTestingController], (service: UserService, backend: HttpTestingController) => {

    const expectedProfile = new Profile(1, 'admin', 'Admin', 'Admin', 'admin@domain.com', new Date(), null, null, null);

    service.login(new User('admin', 'admin', false)).subscribe(
      profile => expect(profile.rol).toEqual('admin'),
      fail
    );

    const req = backend.expectOne({
      url: `${environment.apiUrl}user/login`,
      method: 'POST'
    });

    req.flush(expectedProfile);
  }));
});
