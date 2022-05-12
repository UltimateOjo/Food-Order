import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  foods:Foods[]=[];
  route: any;
  constructor(private fs: FoodService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.foods = this.fs.getAll();
    /*this.route.params.subscribe((params: { [x: string]: string; }) => {
      if(params['searchItem'])
      this.foods = this.fs.getAll().filter(food=>food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      else
      this.foods = this.fs.getAll();
    })*/
}
}
