import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Signal } from '@angular/core';

import { CartService } from './../../cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, RouterLink, MatIconModule, AsyncPipe,MatTooltipModule,CommonModule],
})
export class HeaderComponent {

  private cartService = inject(CartService);
  cartCount = this.cartService.cartCount;
  cartTotal: Signal<number>;

  constructor() {
    // Assuming you have a service that provides the cart total
    this.cartTotal = this.cartService.cartTotal;
  }

  getCartTotalValue(): number {
    return this.cartTotal();
  }

}
