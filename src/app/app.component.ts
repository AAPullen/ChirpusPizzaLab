import { Component } from '@angular/core';
import { MenuItem } from './menu-item';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Menu';

  menu: MenuItem[] = [
    {
      name: "Chicken Fingers",
      category: "dinner",
      price: 11.99
    },
    {
      name: "Pizza",
      category: "dinner",
      price: 11.99
    },
    {
      name: "Wings",
      category: "sides",
      price: 8.99
    },
    {
      name:"Breadsticks",
      category:"sides",
      price: 4.99
    },
    {
      name:"Caesar Salad",
      category:"salads",
      price: 5.99
    },
    {
      name:"Cinnamon Roll",
      category:"dessert",
      price: 8.99
    }
  ];

  getByCategory(cat: string): MenuItem[] {
    return this.menu.filter(item => item.category === cat);
  };

  getCategories(): string[]{
    const categories = this.menu.map(item => item.category)
    console.log(categories);
      // return Array.from(new Set(categories));
      return [...new Set(categories)]
  };

};
  
  
