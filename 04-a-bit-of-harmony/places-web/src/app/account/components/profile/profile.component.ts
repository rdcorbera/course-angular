import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../security/services/profile.service';
import { Profile } from '../../../security/models/profile';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: Profile;
  profileForm: FormGroup;
  updated: boolean;

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.profile = this.profileService.getProfile();
    this.buildForm();
  }

  save(): void {
    const profileToUpdate = this.profileForm.value;
    profileToUpdate.id = this.profile.id;

    this.profileService.update(profileToUpdate).subscribe(prfl => {
      this.profileService.setProfile(prfl);
      this.updated = true;
    });
  }

  reset(): void {
    this.buildForm();
  }

  close(): void {
    this.updated = false;
  }

  private buildForm(): void {
    this.profileForm = this.formBuilder.group({
      firstname: [this.profile.firstname, Validators.required],
      lastname: [this.profile.lastname, Validators.required],
      email: [this.profile.email, Validators.required],
      dateOfBirth: this.profile.dateOfBirth ? this.profile.dateOfBirth.toString().substring(0, 10) : '',
      biography: this.profile.biography,
      facebookLink: this.profile.facebookLink,
      twitterLink: this.profile.twitterLink
    });
  }
}
