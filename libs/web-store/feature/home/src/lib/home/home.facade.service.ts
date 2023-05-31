
import { Injectable, inject } from '@angular/core';
import { HomeStoreState, homeStoreActions, homeStoreFeature } from '@marketplace/web-store/data-access/home';
import { Product } from '@marketplace/web-store/data-access/types';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';

const API_URL = 'https://fakestoreapi.com/products';

interface HomeVM {
  products: Product[]
}

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  private store: Store<HomeStoreState> = inject(Store<HomeStoreState>)

  public getVm(): Observable<HomeVM> {
    return combineLatest([this.store.select(homeStoreFeature.selectProducts)]).pipe(
      map(([products]) => {
        return { products }
      }))
  }

  public addToCartClicked(product: Product): void {
    this.store.dispatch(homeStoreActions.onAddToBasketClicked({ product }))
  }
}
