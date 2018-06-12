import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Place } from '../models/place';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute, private placeService: PlaceService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const placeId = Number.parseInt(params.get('id'));
      this.place = this.placeService.getById(placeId);
    });
  }
}
