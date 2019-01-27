import { Component, OnInit } from '@angular/core';
import { ShoppingCardSevice } from './shopping-card.service';

@Component({
  selector: 'mt-shopping-card',
  templateUrl: './shopping-card.component.html'
})
export class ShoppingCardComponent implements OnInit {

  constructor(private service: ShoppingCardSevice) { }

  ngOnInit() {
  }

  items(): any[]{
    return this.service.items;
  }

  total(): number{
    return this.service.total();
  }

  clear() {
    this.service.clear();
  }

  removeItem(item: any){
    this.service.removeItem(item);
  }

  addItem(item: any){
    this.service.addItem(item);
  }
}
