import { Component, Input } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { NgFor, CurrencyPipe } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    standalone: true,
    imports: [MatFormField, MatLabel, MatSelect, NgFor, MatOption, MatMiniFabButton, MatIcon, CurrencyPipe]
})
export class CartItemComponent {

  @Input() cartItem!: CartItem;

  quantityOptions = [1, 2, 3, 4, 5];

  constructor(private cartService: CartService) { }

  onQuantityChange(quantity: number, cartItem: CartItem) {
    cartItem.quantity = quantity;
    this.cartService.updateCartQuantity(cartItem);
  }

  onRemove(): void {
    this.cartService.removeProduct(this.cartItem.product);
  }
}
