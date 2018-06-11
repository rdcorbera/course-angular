import { Component, OnInit } from '@angular/core';

import {} from '@types/googlemaps';
import { Place } from '../models/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  currentMap: any;
  places: Place[];

  constructor(private placeService: PlaceService) { }

  ngOnInit() {
    this.currentMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -12.075, lng: -77.043},
      zoom: 15
    });

    this.places = this.placeService.listByCategory('');
  }
}
