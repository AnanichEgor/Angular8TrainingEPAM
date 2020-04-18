import { getProducts } from './../../../core/@ngrx/products/products.actions';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from 'src/app/cart/services/cart.service';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, ProductsState } from './../../../core/@ngrx';
// rxjs
import { Observable } from 'rxjs';
import { addProductToCatr } from 'src/app/core/@ngrx/cart/cart.actions';
import {selectProductsData} from "../../../core/@ngrx/products/products.selectors";



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productsState$: Observable<ReadonlyArray<Product>>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.productsState$ = this.store.pipe(select(selectProductsData));
    this.store.dispatch(getProducts());
  }

  onAddProduct(event) {
    this.store.dispatch(addProductToCatr({product: event}));
  }

  onViewProduct(product: Product): void {
    const link = ['/home', 'product', product.id];
    this.router.navigate(link);
  }
}
