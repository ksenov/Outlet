import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html'
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'Кроссовки',
    price: 150,
    category: 'Обувь',
    description: 'Описание',
    image: 'https://via.placeholder.com/150'
  };

  @Output() addToCart = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCard(): void {
    this.addToCart.emit(this.product);
  }
}
