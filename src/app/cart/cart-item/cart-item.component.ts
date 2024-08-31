import { Component, Input } from '@angular/core';
import { CartItem } from '../cart-item';
import { CartService } from '../cart.service';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatOption } from '@angular/material/core';
import { CurrencyPipe } from '@angular/common';
import { MatSelect } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
    standalone: true,
    imports: [MatFormField, MatLabel, MatSelect, MatOption, MatMiniFabButton, MatIcon, CurrencyPipe]
})
export class CartItemComponent {

  @Input() cartItem!: CartItem;

  quantityOptions = [1, 2, 3, 4, 5];

  constructor(private cartService: CartService,  public dialog: MatDialog) { }

  onQuantityChange(quantity: number, cartItem: CartItem) {
    cartItem.quantity = quantity;
    this.cartService.updateCartQuantity(cartItem);
  }

  onRemove(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Are you sure you would like to remove this item?'
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.cartService.removeProduct(this.cartItem.product);
      }
    });
  }
}
