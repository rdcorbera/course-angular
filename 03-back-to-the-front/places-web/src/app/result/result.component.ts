import { Component, OnInit } from '@angular/core';

import { } from '@types/googlemaps';
import { Place } from '../models/place';
import { PlaceService } from '../services/place.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  currentMap: any;
  places: Place[];

  constructor(private router: ActivatedRoute, private placeService: PlaceService) { }

  ngOnInit() {
    this.buildMap();

    this.router.paramMap.subscribe((params: ParamMap) => {
      const query = params.get('query');
      this.placeService.listByCategory(query).subscribe(list => {
        this.loadPlaces(list);
      });
    });
  }

  private buildMap(): void {
    this.currentMap = new google.maps.Map(document.getElementById('map'), {
      center: { lat: -12.075, lng: -77.043 },
      zoom: 15
    });
  }

  private loadPlaces(places: Place[]): void {
    this.places = places;

    for (const place of this.places) {
      const infowindow = new google.maps.InfoWindow({
        content: '<div><h5>' + place.name + '</h5><div>' + place.description + '</div></div>'
      });

      const marker = new google.maps.Marker({
        position: { lat: place.latitude, lng: place.longitude },
        map: this.currentMap
      });

      marker.addListener('click', () => {
        infowindow.open(this.currentMap, marker);
      });
    }
  }
}
