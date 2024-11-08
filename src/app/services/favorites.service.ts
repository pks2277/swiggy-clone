import { Injectable } from '@angular/core';
import { MenuItem } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private favorites: MenuItem[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  addFavorite(item: MenuItem) {
    if (!this.isFavorite(item)) {
      this.favorites.push(item);
      this.saveFavorites();
    }
  }

  removeFavorite(item: MenuItem) {
    this.favorites = this.favorites.filter(fav => fav.id !== item.id);
    this.saveFavorites();
  }

  toggleFavorite(item: MenuItem) {
    if (this.isFavorite(item)) {
      this.removeFavorite(item);
    } else {
      this.addFavorite(item);
    }
  }

  isFavorite(item: MenuItem): boolean {
    return this.favorites.some(fav => fav.id === item.id);
  }

  getFavorites(): MenuItem[] {
    return this.favorites;
  }

  private saveFavorites() {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }
}
