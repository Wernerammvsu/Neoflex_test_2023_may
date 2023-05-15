import { Injectable } from '@angular/core';
import { pipe, scan, Observable, ReplaySubject } from 'rxjs';
import { Product } from '../_models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsInCart: Product[] = [];

  constructor() {
  }

  getHeadphones() {
    const headphones: Product[] = [
      {
        id: 1, 
        name: 'Apple BYZ S852I',
        price: 2927,
        oldPrice: 3527,
        thumbnailUrl: 'assets/products/headphones/1.png',
        rating: 4.7
      },
      {
        id: 2, 
        name: 'Apple EarPods',
        price: 2327,
        thumbnailUrl: 'assets/products/headphones/2.png',
        rating: 4.5
      },
      {
        id: 3, 
        name: 'Apple EarPods',
        price: 2327,
        thumbnailUrl: 'assets/products/headphones/3.png',
        rating: 4.5
      },
      {
        id: 4, 
        name: 'Apple BYZ S852I',
        price: 2927,
        thumbnailUrl: 'assets/products/headphones/4.png',
        rating: 4.7
      },
      {
        id: 5, 
        name: 'Apple EarPods',
        price: 2327,
        thumbnailUrl: 'assets/products/headphones/5.png',
        rating: 4.5
      },
      {
        id: 6, 
        name: 'Apple EarPods',
        price: 2327,
        thumbnailUrl: 'assets/products/headphones/6.png',
        rating: 4.5
      }
    ];
    return headphones;
  }

  getHeadphonesWireless() {
    const headphones: Product[] = [
      {
        id: 7, 
        name: 'Apple EarPods',
        price: 9527,
        thumbnailUrl: 'assets/products/headphones/7.png',
        rating: 4.7
      },
      {
        id: 8, 
        name: 'GERLAX GH-04',
        price: 6527,
        thumbnailUrl: 'assets/products/headphones/8.png',
        rating: 4.7
      },
      {
        id: 9, 
        name: 'BOROFONE BO4',
        price: 7527,
        thumbnailUrl: 'assets/products/headphones/9.png',
        rating: 4.7
      }
    ];
    return headphones;
  }

  addProductToCart(product: Product) {
    this.productsInCart.push(product);
    this.setProductsInCart();
  }

  getProductsInCart() {
    const productsInCart = JSON.parse(localStorage.getItem('productsInCart')!) as Product[];
    if (productsInCart) {
      this.productsInCart = productsInCart;
    }
  }

  setProductsInCart() {
    localStorage.setItem('productsInCart', JSON.stringify(this.productsInCart));
  }

  removeProductFromCart(productId: number) {
    this.productsInCart = this.productsInCart.filter(p => p.id !== productId);
    this.setProductsInCart();
  }

  removeProductFromCartSingle(productId: number) {
    const index = this.productsInCart.findIndex(p => p.id === productId);
    this.productsInCart.splice(index, 1);
    this.setProductsInCart();
  }
}
