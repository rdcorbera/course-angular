import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Profile } from '../models/profile';
import { Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  errorMessage: string;

  constructor(private router: Router, private userService: UserService, private profileService: ProfileService) {
    this.user = new User('', '', false);
  }

  ngOnInit() {
  }

  login(): void {
    this.userService.login(this.user).subscribe(
      (profile: Profile) => {
        this.profileService.setProfile(profile);
        // Handler with a Subject: Lesson 06
        this.router.navigate(['/']).then(() => document.location.reload(true));
      },
      this.loginError
    );
  }

  private loginError(error: HttpErrorResponse): void {
    if (error.status === 404) {
      this.errorMessage = 'Invalid username or password';
    } else {
      this.errorMessage = 'Server side error';
    }
  }
}
