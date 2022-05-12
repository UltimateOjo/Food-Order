import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from './Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food =>food.id ==id)!;
  }

  getAllFoodByTag(tag:string) :Foods[] {
    return tag == "All"?
    this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
    //you can write this statement is very simple type
  }

  getAllTag():Tag[]{
  return [
      {name: 'All', count: 14},
      {name: 'FastFood', count: 4},
      {name: 'Pizza', count: 2},
      {name: 'Lunch', count: 3},
      {name: 'SlowFood', count: 2},
      {name: 'Hamburger', count: 1},
      {name: 'Fry', count: 1},
      {name: 'Soup', count: 1},
  ]
  }

  getAll(): Foods[]{
    return [
      /*'/assets/food-1.jpg',
      '/assets/food-2.jpg',
      '/assets/food-3.jpg',
      '/assets/food-4.jpg',
      '/assets/food-5.jpg',
      '/assets/food-6.jpg',
      '/assets/food-7.jpg',
      '/assets/food-8.jpg'*/
      {
        id: 1,
        price: 10,
        name:'Pizza Pepperoni',
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/food-1.jpg',
        cookTime:'10-20',
        origins:['italy'],
        tags:['FastFood','Pizza','Lunch']

      },
      {
        id: 2,
        price: 20,
        name:'Meatball',
        favorite:true,
        stars:4.7,
        imageUrl:'/assets/food-2.jpg',
        cookTime:'20-30',
        origins:['italy'],
        tags:['FastFood','Meatball','Lunch']

      },
      {
        id: 3,
        price: 10,
        name:'Smash Burger',
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/food-3.jpg',
        cookTime:'30-40',
        origins:['american'],
        tags:['FastFood','Burger','Lunch']

      },
      {
        id: 4,
        price: 10,
        name:'Fries',
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/food-4.jpg',
        cookTime:'10-20',
        origins:['america'],
        tags:['FastFood','Fries','Lunch']

      },
      {
        id: 5,
        price: 10,
        name:'Soup',
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/food-5.jpg',
        cookTime:'10-20',
        origins:['china'],
        tags:['FastFood','soup','Lunch']

      },
      {
        id: 6,
        price: 10,
        name:'Pizza Pepperoni',
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/food-6.jpg',
        cookTime:'10-20',
        origins:['italy'],
        tags:['FastFood','Pizza','Lunch']

      },
      {
        id: 7,
        price: 10,
        name:'Pitmasters Burger',
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/food-7.jpg',
        cookTime:'10-20',
        origins:['america'],
        tags:['FastFood','Burger','Lunch']

      },
      {
        id: 8,
        price: 10,
        name:'Tacos',
        favorite:false,
        stars:4.5,
        imageUrl:'/assets/food-8.jpg',
        cookTime:'10-20',
        origins:['mexico'],
        tags:['FastFood','taco','Lunch']

      },
    ]
  }
}
