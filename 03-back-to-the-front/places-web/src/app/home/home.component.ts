import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { Place } from '../models/place';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  placesByDay: Place[];
  placesByWeek: Place[];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.placeService.listPopularByDay().subscribe(list => this.placesByDay = list);
    this.placeService.listPopularByWeek().subscribe(list => this.placesByWeek = list);
  }
}
