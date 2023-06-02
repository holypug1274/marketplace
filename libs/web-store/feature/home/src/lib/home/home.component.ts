
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '@marketplace/web-store/ui/product-card';
import { HomeVM, Product } from '@marketplace/web-store/data-access/types';
import { HomeFacadeService } from './home.facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'marketplace-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public facadeService = inject(HomeFacadeService)

  public vm$: Observable<HomeVM> = this.facadeService.getVm()

  public addToCartClicked(product: Product): void {
    this.facadeService.addToCartClicked(product);
  }
}
