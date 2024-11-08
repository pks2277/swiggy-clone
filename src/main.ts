import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { FavoritesComponent } from './app/favoritePage/favorites.component';
import { CartComponent } from './app/cartPage/cart.component';
import { RestaurantDetailsComponent } from './app/restaurantPage/restaurantPage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'cart', component: CartComponent },
  { path: 'restaurant/:id', component: RestaurantDetailsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch(err => console.error(err));
