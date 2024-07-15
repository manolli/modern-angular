import { Component } from '@angular/core';

import { CartService } from '../cart.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';

@Component({
    selector: 'app-cart-total-summary',
    templateUrl: './cart-total-summary.component.html',
    styleUrls: ['./cart-total-summary.component.scss'],
    standalone: true,
    imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, MatCardActions, MatButton, AsyncPipe, CurrencyPipe]
})
export class CartTotalSummaryComponent {

  total = 10.00;

  constructor(public cartService: CartService) { }
}
