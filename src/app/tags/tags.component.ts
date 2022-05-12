import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../services/food/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent:string = 'center';
  fs: any;
  constructor() { }
  tags?:Tag[]=[];
  ngOnInit(): void {
    //this.tags = this.fs.getAllTag();
  }

}
