import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
//import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  //cartService!: CartService;

  constructor(private cartService: CartService, 
      /*private foodService:FoodService*/) { //after design this page, i will remove it
        /*let foods = foodService.getAll();
        //cartService.addToCart(foods[1]);
        //cartService.addToCart(foods[2]);
        //cartService.addToCart(foods[3]);
        c//artService.addToCart(foods[4]);*/
        this.setCart();
  }

  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

}
