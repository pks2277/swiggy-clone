import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RestaurantService, Restaurant } from '../services/restaurant.service';
import { MenuService, MenuItem } from '../services/menu.service';
import { HeaderComponent } from "../mainPage/header/header.component";
import { FavoritesService } from '../services/favorites.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-restaurantPage',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './restaurantPage.component.html',
  styleUrls: ['./restaurantPage.component.scss']
})

export class RestaurantDetailsComponent implements OnInit {
  restaurant: Restaurant | undefined;
  menuItems: MenuItem[] = [];

  showWarning = false;
  selectedItem: MenuItem | null = null;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private menuService: MenuService,
    private favoritesService: FavoritesService,
    private cartService: CartService

  ) {}



  ngOnInit() {
    const restaurantId = +this.route.snapshot.paramMap.get('id')!;
    this.restaurant = this.restaurantService.getRestaurantById(restaurantId);

    if (this.restaurant) {
      this.menuItems = this.menuService.getMenuItemsByRestaurantId(restaurantId);
    }
  }


  //fav
  toggleFavorite(item: MenuItem) {
    this.favoritesService.toggleFavorite(item);
  }

  isFavorite(item: MenuItem): boolean {
    return this.favoritesService.isFavorite(item);
  }

  //cart
  

  addToCart(item: MenuItem) {
    if (this.cartService.addToCart(item)) {
      this.showWarning = false;
    } else {
      this.selectedItem = item;
      this.showWarning = true;
    }
  }

  clearCartAndAdd() {
    if (this.selectedItem) {
      this.cartService.clearCart();
      this.cartService.addToCart(this.selectedItem);
      this.selectedItem = null;
      this.showWarning = false;
    }
  }

  cancelAdd() {
    this.selectedItem = null;
    this.showWarning = false;
  }

}
