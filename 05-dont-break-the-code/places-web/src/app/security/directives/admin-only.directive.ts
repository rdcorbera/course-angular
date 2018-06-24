import { Directive, ElementRef, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Directive({
  selector: '[appAdminOnly]'
})
export class AdminOnlyDirective implements OnInit {

  constructor(private el: ElementRef, private profileService: ProfileService) { }

  ngOnInit() {
    const isAdmin: boolean = this.profileService.isAdmin();

    if (!isAdmin) {
      this.el.nativeElement.remove();
    }
  }
}
