import { Injectable } from '@angular/core';

export interface MenuItem {
  id: number;
  restaurantId: number;
  name: string;
  description: string;
  price: number;
  cuisine: string;
  veg: boolean;
  img: string;
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuItems: MenuItem[] = [
    // La Pino
    { id: 1, restaurantId: 4, name: 'Margherita Pizza', description: 'Classic cheese pizza', price: 200, cuisine: 'Italian', veg: true, img: 'https://www.dominos.co.in//files/items/Peppy_Paneer.jpg' },
    { id: 2, restaurantId: 4, name: 'Pepperoni Pizza', description: 'Topped with pepperoni', price: 250, cuisine: 'Italian', veg: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMZKt346wmQDyFD2sp5sIoJr-iuvMhf_NbQ&s' },
    { id: 3, restaurantId: 4, name: 'Garlic Breadsticks', description: 'Crispy and garlicky breadsticks', price: 400, cuisine: 'Italian', veg: true, img: 'https://www.dominos.com.au/ManagedAssets/AU/product/M033D/AU_M033D_en_hero_12559.jpg?v30475953' },
    { id: 4, restaurantId: 4, name: 'Veggie Supreme Pizza', description: 'Loaded with fresh vegetables', price: 220, cuisine: 'Italian', veg: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMZKt346wmQDyFD2sp5sIoJr-iuvMhf_NbQ&s' },
    { id: 5, restaurantId: 4, name: 'Chicken Tikka Pizza', description: 'Topped with spicy chicken tikka', price: 240, cuisine: 'Italian', veg: false, img: 'https://www.dominos.com.au/ManagedAssets/AU/product/M033D/AU_M033D_en_hero_12559.jpg?v30475953' },
    { id: 6, restaurantId: 4, name: 'Cheesy Dip', description: 'Perfect dip for pizzas', price: 30, cuisine: 'Italian', veg: true, img: 'https://www.dominos.co.in//files/items/Peppy_Paneer.jpg' },
    { id: 7, restaurantId: 4, name: 'Paneer Pizza', description: 'Pizza topped with paneer cubes', price: 230, cuisine: 'Italian', veg: true, img: 'https://www.dominos.co.in//files/items/Peppy_Paneer.jpg' },
    { id: 8, restaurantId: 4, name: 'Spicy Chicken Wings', description: 'Crispy chicken wings', price: 480, cuisine: 'Italian', veg: false, img: 'https://www.dominos.com.au/ManagedAssets/AU/product/M033D/AU_M033D_en_hero_12559.jpg?v30475953' },
    { id: 9, restaurantId: 4, name: 'Stuffed Garlic Bread', description: 'Stuffed with corn and cheese', price: 420, cuisine: 'Italian', veg: true, img: 'https://www.dominos.co.in//files/items/Peppy_Paneer.jpg' },
    { id: 10, restaurantId: 4, name: 'Tandoori Paneer Pizza', description: 'Tandoori-flavored paneer', price: 250, cuisine: 'Italian', veg: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMZKt346wmQDyFD2sp5sIoJr-iuvMhf_NbQ&s' },


      // KFC
      { id: 11, restaurantId: 3, name: 'Zinger Burger', description: 'Crispy fried chicken burger with Indian spices', price: 150, cuisine: 'American', veg: false, img: 'https://cdn4.singleinterface.com/files/banner_images/34404/952_1624955497_wednesdaybucketmin.jpg' },
      { id: 12, restaurantId: 3, name: 'Peri-Peri Chicken Wings', description: 'Spicy wings with a tangy peri-peri sauce', price: 180, cuisine: 'American', veg: false, img: 'https://content.jdmagicbox.com/v2/comp/mumbai/j4/022pxx22.xx22.231128132443.t5j4/catalogue/kfc-panvel-mumbai-fried-chicken-restaurants-07ea1esi6u.jpg' },
      { id: 13, restaurantId: 3, name: 'Masala Chicken Popcorn', description: 'Bite-sized crispy chicken, spiced with Indian masala', price: 130, cuisine: 'American', veg: false, img: 'https://cdn4.singleinterface.com/files/banner_images/34404/952_1624955497_wednesdaybucketmin.jpg '},
      { id: 14, restaurantId: 3, name: 'Tandoori Chicken Wrap', description: 'Grilled tandoori chicken wrapped in soft naan', price: 170, cuisine: 'Indian-American Fusion', veg: false, img: 'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_610,q_75,w_910/v1/crm/yorkcountysc/KFC4_586ea090-5056-a36a-0b656dda1537e036.png' },
      { id: 15, restaurantId: 3, name: 'Paneer Tikka Burger', description: 'Grilled paneer tikka with a spicy mayo sauce', price: 130, cuisine: 'Indian-American Fusion', veg: true, img: 'https://content.jdmagicbox.com/v2/comp/mumbai/j4/022pxx22.xx22.231128132443.t5j4/catalogue/kfc-panvel-mumbai-fried-chicken-restaurants-07ea1esi6u.jpg' },
  
      // Pizza Hut
      { id: 21, restaurantId: 2, name: 'Paneer Tikka Pizza', description: 'Pizza topped with marinated paneer tikka and veggies', price: 220, cuisine: 'Italian-Indian Fusion', veg: true, img: 'https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_5QC4HBC039RJ406SQH4UBH3695-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb' },
      { id: 22, restaurantId: 2, name: 'Butter Chicken Pizza', description: 'Pizza topped with creamy butter chicken and mozzarella', price: 240, cuisine: 'Italian-Indian Fusion', veg: false, img: 'https://content3.jdmagicbox.com/comp/def_content_category/pizza-outlets-pizza-hut/pizza-outlets-pizza-hut-315-urrbg.jpg' },
      { id: 23, restaurantId: 2, name: 'Aloo Gobi Pizza', description: 'Pizza with spiced potato and cauliflower toppings', price: 200, cuisine: 'Italian-Indian Fusion', veg: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7vOzm1fzmb7MKxyyhi7COx5kuckkpBnHN91I4OVrjA2TzvUUrow-F6cOryx6m0Z5CzzI&usqp=CAU' },
      { id: 24, restaurantId: 2, name: 'Tandoori Chicken Pizza', description: 'Pizza with smoky tandoori chicken and green peppers', price: 250, cuisine: 'Italian-Indian Fusion', veg: false, img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/20/9f/25/59/great-food.jpg?w=1200&h=-1&s=1' },
      { id: 25, restaurantId: 2, name: 'Spicy Veggie Supreme Pizza', description: 'Pizza with a blend of spicy vegetables', price: 220, cuisine: 'Italian-Indian Fusion', veg: true, img: 'https://www.yum.com/wps/wcm/connect/yumbrands/77ac5d27-1357-4792-9953-54b11f5ae7dd/yum-com-24-product-PH.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_5QC4HBC039RJ406SQH4UBH3695-77ac5d27-1357-4792-9953-54b11f5ae7dd-oXSxcXb' },
  
      // La Pina (Assumed Fusion Indian-Italian Restaurant)
      { id: 31, restaurantId: 1, name: 'Indian Paneer Pizza', description: 'Pizza topped with grilled paneer cubes and spicy chutney', price: 240, cuisine: 'Indian-Italian Fusion', veg: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SNioyRpKDlDGpAwryJImEAu8rJ37fgObEcsLOCpDNo-U0HknBpLr-IySwva9qGWcR6Q&usqp=CAU' },
      { id: 32, restaurantId: 1, name: 'Tandoori Pizza', description: 'Pizza with tandoori marinated chicken and veggies', price: 250, cuisine: 'Indian-Italian Fusion', veg: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sT26_BWoXpD4eYMA0PjxLTb5bOhCkyt1Gw&s' },
      { id: 33, restaurantId: 1, name: 'Chana Masala Pasta', description: 'Pasta in spicy chickpea curry sauce', price: 220, cuisine: 'Indian-Italian Fusion', veg: true, img: 'https://images.dominos.com.bd/media/HomeProductV1-Meatzza.jpg?ver=V0.0.2' },
      { id: 34, restaurantId: 1, name: 'Palak Paneer Ravioli', description: 'Ravioli stuffed with paneer and spinach, served with creamy sauce', price: 240, cuisine: 'Indian-Italian Fusion', veg: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy-dorvjxZgBNXFufBCjgs_-O_ZCHriWvPyg&s' },
      { id: 35, restaurantId: 1, name: 'Curry Chicken Lasagna', description: 'Layers of lasagna with spicy curry chicken and cheese', price: 260, cuisine: 'Indian-Italian Fusion', veg: false, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEHNLvP9KyxkRdqMAuPI8qs1M2f9YS4nWyQ&s' },
      { id: 36, restaurantId: 1, name: 'Vegetable Biryani Risotto', description: 'Italian risotto with an Indian biryani twist', price: 230, cuisine: 'Indian-Italian Fusion', veg: true, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5SNioyRpKDlDGpAwryJImEAu8rJ37fgObEcsLOCpDNo-U0HknBpLr-IySwva9qGWcR6Q&usqp=CAU' },
  
    ];

  getMenuItemsByRestaurantId(restaurantId: number): MenuItem[] {
    return this.menuItems.filter(item => item.restaurantId === restaurantId);
  }
}
