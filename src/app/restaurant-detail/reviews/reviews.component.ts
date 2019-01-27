import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(private service: RestaurantService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.service.reviewsOfRestaurant(this.router.parent.snapshot.params['id']);
  }

}
