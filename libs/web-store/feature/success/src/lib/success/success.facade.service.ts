

import { Injectable, inject } from '@angular/core';
import { HomeStoreState } from '@marketplace/web-store/data-access/home';
import { SuccessVM } from '@marketplace/web-store/data-access/types';
import { Store } from '@ngrx/store';
import { Observable, combineLatest, map } from 'rxjs';
import { successStoreActions, successStoreFeature } from '@marketplace/web-store/data-access/success'


@Injectable({
  providedIn: 'root'
})
export class SuccessFacadeService {
  private store: Store<HomeStoreState> = inject(Store<HomeStoreState>)

  public getVm(): Observable<SuccessVM> {
    return combineLatest([this.store.select(successStoreFeature.selectTotalPrice), this.store.select(successStoreFeature.selectOrderNumber)]).pipe(
      map(([totalPrice, orderNumber]) => {
        return { totalPrice, orderNumber }
      }))
  }

  public onGoHomeClicked(): void {
    this.store.dispatch(successStoreActions.onGoHomeClicked())
  }
}
