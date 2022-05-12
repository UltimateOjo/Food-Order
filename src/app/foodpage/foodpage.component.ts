import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit {
  visible:boolean = false;
  notFoundMessage:string = 'Nothing Found!';
  food!:Foods;
  resetLinkText:string = 'Reset'
  resetLinkRoute:string='/';

  constructor(private activatedRoute:ActivatedRoute,
    private foodService:FoodService, private cartService:CartService,
    private router:Router) {
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food = foodService.getFoodById(params['id'])
      })
     }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }
}
