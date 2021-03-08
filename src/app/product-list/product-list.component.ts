import { Component, OnInit } from '@angular/core';
import { products } from '../products';

interface Product {
  id: number;
  name: String;
  price: number;
  description: String;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: Array<Product> = products;

  ngOnInit(): void {}

  share() {
    alert('The product has been shared!');
  }

  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
}
