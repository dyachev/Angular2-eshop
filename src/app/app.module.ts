import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';

import { ProductService } from './shared/product.service';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
