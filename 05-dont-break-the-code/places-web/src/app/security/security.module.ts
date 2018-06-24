import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './services/user.service';
import { ProfileService } from './services/profile.service';
import { AdminOnlyDirective } from './directives/admin-only.directive';
import { AdminOnlyGuard } from './guards/admin-only.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminOnlyDirective],
  exports: [AdminOnlyDirective],
  providers: [
    UserService,
    ProfileService,
    AdminOnlyGuard
  ]
})
export class SecurityModule { }
