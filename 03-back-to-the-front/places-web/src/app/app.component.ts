import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceService } from './services/place.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  query: string;

  constructor(private router: Router) {}

  search(): void {
    this.router.navigate(['/search', this.query]);
  }
}
