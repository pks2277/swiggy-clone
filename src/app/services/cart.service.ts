import { Injectable } from '@angular/core';
import { MenuItem } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: MenuItem[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
  private restaurantIdInCart: number | null = this.cartItems.length ? this.cartItems[0].restaurantId : null;

  getCartItems(): MenuItem[] {
    return this.cartItems;
  }

  addToCart(item: MenuItem): boolean {
    if (this.restaurantIdInCart === null || this.restaurantIdInCart === item.restaurantId) {
      this.cartItems.push(item);
      this.restaurantIdInCart = item.restaurantId;
      this.saveCart();
      return true;
    }
    return false;
  }

  clearCart() {
    this.cartItems = [];
    this.restaurantIdInCart = null;
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  removeItem(item: MenuItem): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.saveCart();
  }
  
}
