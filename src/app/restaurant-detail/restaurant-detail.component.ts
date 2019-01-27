import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Restaurant } from 'app/restaurants/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant

  constructor(private _service: RestaurantService, private router: ActivatedRoute) { }

  ngOnInit() {
    this._service.restaurantById(this.router.snapshot.paramMap.get('id'))
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
