import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    @Input()
    product: Product[];
    // constructor(product: Product[]) {
    //   this.product = product;
    // }

  constructor(){}
  ngOnInit() {

  }

  edit(){
    console.log('Edit');
  }

  delete(){
    console.log('Delete');
  }

  add(){
    console.log('Add');
  }

}
