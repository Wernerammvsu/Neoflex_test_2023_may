import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../_models/product';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsInCart();
  }
}
