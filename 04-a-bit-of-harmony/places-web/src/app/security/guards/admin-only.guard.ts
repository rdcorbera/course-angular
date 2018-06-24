import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ProfileService } from '../services/profile.service';

@Injectable()
export class AdminOnlyGuard implements CanActivate {

  constructor(private profileService: ProfileService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const isAdmin: boolean = this.profileService.isAdmin();

    if (!isAdmin) this.router.navigate(['/']);

    return isAdmin;
  }
}
