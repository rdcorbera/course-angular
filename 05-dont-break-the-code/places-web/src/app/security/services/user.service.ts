import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile';
import { ProfileService } from './profile.service';

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private profileService: ProfileService) { }

  public login(user: User): Observable<Profile> {
    return this.http.post<Profile>(environment.apiUrl + 'user/login', user);
  }

  public logout(): void {
    this.profileService.clear();
  }
}
