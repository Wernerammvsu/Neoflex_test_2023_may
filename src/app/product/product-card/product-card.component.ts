import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addToCart() {
    this.productService.addProductToCart(this.product);
  }
}
