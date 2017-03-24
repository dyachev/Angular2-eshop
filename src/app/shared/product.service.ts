import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Product } from './../products/product/product';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  products: Product[];

  constructor(private http: Http) { }

  getProducts(): Observable<Product[]> {
     return this.http.get('./../data/products.json')
      .map(res => res.json());
  }

}
