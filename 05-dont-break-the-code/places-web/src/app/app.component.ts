import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Profile } from './security/models/profile';

import { UserService } from './security/services/user.service';
import { ProfileService } from './security/services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  profile: Profile;
  query: string;

  constructor(private router: Router, private userService: UserService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profile = this.profileService.getProfile();
  }

  search(): void {
    this.router.navigate(['/places/search', this.query]);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/places']);
  }
}
