import { Component, OnInit } from '@angular/core';
import { Product } from './product/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  modalOpen: boolean;
  modalProduct: Product;
  modalTitle: string;
  form: FormGroup;
  constructor(private productService: ProductService, public fb: FormBuilder) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => this.products = res);
    this.modalOpen = false;
    
    this.modalTitle = 'Create New product';
  }

  openModal(product: Product) {
    console.log('event', typeof(product));
    this.modalOpen = true;
    this.modalProduct = product ? product : new Product();
    this.modalTitle =  product ? 'Edit product' : 'Create New product';
  }


  onSubmit() {
    
  }

  // add() {
  //   this.products.unshift(new Product({mode: 'add'}));
  // };
}
