import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  title: String;
  restaurants: any[];

  constructor() {
    this.restaurants = [
      {
        name: 'Outback',
        desc: 'uma descrição'
      }
    ];

    this.title = 'Restaurantes';
  }

  ngOnInit() {
  }

}
