import { Component } from '@angular/core';
import { CartTotalSummaryComponent } from '../cart-total-summary/cart-total-summary.component';
import { CartListComponent } from '../cart-list/cart-list.component';
import { MatToolbar } from '@angular/material/toolbar';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
    standalone: true,
    imports: [MatToolbar, CartListComponent, CartTotalSummaryComponent]
})
export class CartComponent {

}
