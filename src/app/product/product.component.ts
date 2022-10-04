import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productDetails = [
    new Product("Product Name 1", 33 ,"shoe.jpg")
    
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
