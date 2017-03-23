import { Component, OnInit } from '@angular/core';
import { Product } from './product/product';

import { ProductService } from './../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  editorDialog = {
    open: false,
    product: {}
  };

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => this.products = res);
  }

  add() {
    this.products.unshift(new Product({mode: 'add'}));
  };
}
