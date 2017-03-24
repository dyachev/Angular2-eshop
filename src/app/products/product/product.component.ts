import { Component, Input, OnInit , Output, EventEmitter} from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;

  @Output() openModaleven = new EventEmitter();

  constructor() {}
  ngOnInit() {}


  openModal() {
    console.log('product', this.product);
    this.openModaleven.emit(this.product);
  }

}
