import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favoritePage/favorites.component';
import { CartComponent } from './cartPage/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, FavoritesComponent, CartComponent, RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swiggyy';

  onLinkClick(page: string) {
    console.log(`${page} link clicked`);
  }
}
