import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductFormComponent } from './product-form/product-form.component';

export const PRODUCT_ROUTES: Routes = [
  { path: '', component: ProductsListComponent },
  { path: 'new', component: ProductFormComponent }
];