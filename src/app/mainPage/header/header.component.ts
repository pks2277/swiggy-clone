import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  navItem = [
    {
      image:"",
      title:"Home",
      link: "['/']"
    },
    {
      image:"../../assets/header/search.png",
      title:"Search",
      link: ""
    },
    {
      image:"../../assets/header/restaurant.png",
      title:"Restaurant",
      link: ""
    },
    {
      image:"../../assets/header/fav.png",
      title:"Favorite",
      link: "['/favorites']"
    },
    {
      image:"../../assets/header/register.png",
      title:"Sign In",
      link: ""
    },
    {
      image:"../../assets/header/cart.png",
      title:"Cart",
      link:"['/cart']"
    },
    
  ]

}
