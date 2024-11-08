import { Component } from '@angular/core';
import { HeaderComponent } from '../mainPage/header/header.component';
import { FooterComponent } from '../mainPage/footer/footer.component';
import { BannerComponent } from '../mainPage/banner/banner.component';
import { RestaurantsComponent } from '../mainPage/restaurants/restaurants.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RestaurantsComponent, BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
