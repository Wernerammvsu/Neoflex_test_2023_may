import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/_models/cartItem';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  @Output() addProductEmitter = new EventEmitter();
  @Output() removeProductEmitter = new EventEmitter();
  @Output() removeCartItemEmitter = new EventEmitter();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  plus() {
    this.cartItem.quantity++;
    this.productService.addProductToCart(this.cartItem.product);
  }

  minus() {
    if (this.cartItem.quantity > 1) {
      this.cartItem.quantity--;
      this.productService.removeProductFromCartSingle(this.cartItem.product.id);
    }
  }

  delete() {
    this.removeCartItemEmitter.emit(this.cartItem.product.id);
  }
}
