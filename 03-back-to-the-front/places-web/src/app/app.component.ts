import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './models/profile';
import { UserService } from './services/user.service';
import { ProfileService } from './services/profile.service';

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
    this.router.navigate(['/search', this.query]);
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
