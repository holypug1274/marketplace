import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '@marketplace/web-store/data-access/types';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'marketplace-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
  @Input()
  public product!: Product;

  @Output()
  public addToCartClicked: EventEmitter<Product> = new EventEmitter<Product>()
}
