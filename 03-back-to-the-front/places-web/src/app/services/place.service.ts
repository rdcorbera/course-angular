import { Injectable } from '@angular/core';
import { Place } from '../models/place';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlaceService {

  private places: Place[];

  constructor(private http: HttpClient) { }

  public listPopularByDay(): Observable<Place[]> {
    return this.http.get<Place[]>(environment.apiUrl + 'places/popular-day');
  }

  public listPopularByWeek(): Observable<Place[]> {
    return this.http.get<Place[]>(environment.apiUrl + 'places/popular-week');
  }

  public listByCategory(category: string) {
    return this.places;
  }

  public getById(id: number): Observable<Place> {
    return this.http.get<Place>(environment.apiUrl + 'places/' + id + '/details');
  }
}
