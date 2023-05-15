import { Component, OnInit } from '@angular/core';
import { Product } from '../_models/product';
import { CartItem } from '../_models/cartItem';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  reloadFlag = true;

  get totalPrice() {
    let sum = 0;
    for (const cartItem of this.cartItems) {
      sum += cartItem.product.price * cartItem.quantity;
    }
    return sum;
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    for (let i = 0; i < this.productService.productsInCart.length; i++) {
      const product = this.productService.productsInCart[i];
      const index = this.cartItems.findIndex(c => c.product.id === product.id);
      if (index === -1) {
        this.cartItems.push({
          product: product,
          quantity: 1
        })
      }
      else {
        this.cartItems[index].quantity++;
      }
    }
  }

  removeCartItem(event: any) {
    const productId = event as number;
    this.productService.removeProductFromCart(productId);
    this.cartItems = this.cartItems.filter(c => c.product.id !== productId);
    this.reload();
  }

  reload() {
    setTimeout(() => this.reloadFlag = false);
    setTimeout(() => this.reloadFlag = true);
  }
}
