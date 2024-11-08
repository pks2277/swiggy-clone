import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../mainPage/header/header.component';
import { MenuItem } from '../services/menu.service';
import { FavoritesService } from '../services/favorites.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})


export class FavoritesComponent {
  favoriteItems: MenuItem[] = [];

  constructor(private favoriteService: FavoritesService) {}

  ngOnInit() {
    this.favoriteItems = this.favoriteService.getFavorites();
  }

  removeFavorite(item: MenuItem) {
    this.favoriteService.removeFavorite(item);
    this.favoriteItems = this.favoriteService.getFavorites(); 
  }
}
