import { Injectable } from '@angular/core';

export interface Restaurant {
  id: number;
  name: string;
  cuisine: string[];
  location: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private restaurants: Restaurant[] = [
    { id: 1, name: 'La Pino Pizza', cuisine: ['Italian', 'Pizza'], location: 'Bhubaneswar', imageUrl: '../../assets/restaurant/415025368_790891383053503_6376990549798789103_n.jpg' },
    { id: 2, name: 'Pizza Hut', cuisine: ['American', 'Barbecue'], location: 'Bhubaneswar', imageUrl: '../../assets/restaurant/375878868_708263571343463_3090884599516242371_n.jpg' },
    { id: 3, name: 'KFC', cuisine: ['Indian', 'Fusion'], location: 'Bhubaneswar', imageUrl: '../../assets/restaurant/mtnRMKlf_400x400.jpg' },
    { id: 4, name: 'Dominos', cuisine: ['Chinese', 'Asian'], location: 'Bhubaneswar', imageUrl: '../../assets/restaurant/dominos-advertising.jpg' },
];
  getRestaurants(): Restaurant[] {
    return this.restaurants;
  }

  getRestaurantById(id: number): Restaurant | undefined {
    return this.restaurants.find(restaurant => restaurant.id === id);
  }
  constructor() { }
}
