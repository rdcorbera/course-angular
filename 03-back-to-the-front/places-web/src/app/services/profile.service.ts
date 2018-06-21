import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profile } from '../models/profile';

@Injectable()
export class ProfileService {

  private profile: Profile;

  constructor(private http: HttpClient) { }

  public setProfile(prfl: Profile): void {
    localStorage.setItem('profile', JSON.stringify(prfl));
    this.profile = prfl;
  }

  public getProfile(): Profile {
    const prfl = JSON.parse(localStorage.getItem('profile'));
    this.profile = prfl;
    return this.profile;
  }

  public clear(): void {
    this.profile = null;
    localStorage.clear();
  }

  public update(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(environment.apiUrl + 'user/profile', profile);
  }
}
