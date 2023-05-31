import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { BasketVM, ProductSummary } from '@marketplace/web-store/data-access/types';
import { BasketFacadeService } from './basket.facade.service';
import { Observable } from 'rxjs';

const PRODUCTS_DATA: ProductSummary[] = [
  { id: 1, title: 'Hydrogen', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 2, title: 'Helium', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 3, title: 'Lithium', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 4, title: 'Beryllium', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 5, title: 'Boron', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 6, title: 'Carbon', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 7, title: 'Nitrogen', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 8, title: 'Oxygen', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 9, title: 'Fluorine', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { id: 10, title: 'Neon', price: 150, quantity: 5, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
];

@Component({
  selector: 'marketplace-basket',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule],
  providers: [BasketFacadeService],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  displayedColumns: string[] = ['image', 'id', 'title', 'price', 'quantity'];
  dataSource = PRODUCTS_DATA;
  public facadeService: BasketFacadeService = inject(BasketFacadeService)

  public vm$: Observable<BasketVM> = this.facadeService.getVm();
}
