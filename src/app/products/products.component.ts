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
  modalOpen: boolean;
  modalProduct: Product;
  modalTitle: string;
  modalMode: string;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe((res) => this.products = res);
    this.modalOpen = false;
    this.modalTitle = 'Create New product';
  }

  openModal(product: Product) {
    if (this.modalOpen) {
      this.closeModal();
    }

    this.modalOpen = true;

    if (typeof(product) !== 'undefined'){
      this.modalProduct = product;
      this.modalMode = 'edit';
    } else {
      this.modalProduct = new Product();
      this.modalMode = 'add';
    }
    this.modalTitle =  product ? 'Edit product' : 'Create New product';
  }

  closeModal(){
    this.modalOpen = false;
  }


  deleteItem(product: Product) {
    const index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }


  onSubmit(values) {
    this.products.push(values);
    this.closeModal();
  }
}
