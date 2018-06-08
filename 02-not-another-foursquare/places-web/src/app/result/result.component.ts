import { Component, OnInit } from '@angular/core';

import {} from '@types/googlemaps';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  currentMap: any;

  constructor() { }

  ngOnInit() {
    this.currentMap = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -12.075, lng: -77.043},
      zoom: 15
    });
  }
}
