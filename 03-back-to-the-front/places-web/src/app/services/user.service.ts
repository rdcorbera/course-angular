import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile';

@Injectable()
export class UserService {

  private profile: Profile;

  constructor(private http: HttpClient) { }

  public login(user: User): Observable<Profile> {
    return this.http.post<Profile>(environment.apiUrl + 'user/login', user);
  }

  public setProfile(prfl: Profile): void {
    localStorage.setItem('profile', JSON.stringify(prfl));
    this.profile = prfl;
  }

  public getProfile(): Profile {
    const prfl = JSON.parse(localStorage.getItem('profile'));
    this.profile = prfl;
    return this.profile;
  }

  public logout(): void {
    this.profile = null;
    localStorage.clear();
  }
}
