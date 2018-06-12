import { Injectable } from '@angular/core';
import { Place } from '../models/place';
import { Comment } from '../models/comment';

@Injectable()
export class PlaceService {

  private places: Place[];

  constructor() {
    this.places = [];
    this.places.push(new Place(
      1, 'Mc Donalds', 'Fast food restaurante', ['resturante', 'hamburguers'], 'Avenue One Two Three', -12.00, -12.00, [
        new Comment('userone', 'Low prices', 'This week all the products has fitty percent of discount', new Date())
      ])
    );
    this.places.push(new Place(
      2, 'LongHorn', 'Grill, Pastas and Drinks', ['resturante', 'drinks'], 'Avenue One Two Three', -12.00, -12.00, [
        new Comment('userone', 'Low prices', 'This week all the products has fitty percent of discount', new Date())
      ])
    );
    this.places.push(new Place(
      3, 'TGI Fridays', 'Fast food restaurante', ['drinks'], 'Avenue One Two Three', -12.00, -12.00, [
        new Comment('userone', 'Low prices', 'This week all the products has fitty percent of discount', new Date())
      ])
    );
  }

  public listPopularByDay(): Place[] {
    return this.places;
  }

  public listPopularByWeek(): Place[] {
    return this.places;
  }

  public listByCategory(category: string) {
    return this.places;
  }

  public getById(id: number): Place {
    return this.places.find(place => place.id === id);
  }
}
