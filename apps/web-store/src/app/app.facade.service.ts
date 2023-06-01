

import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { WebStoreStoreState } from './+state/store.state';
import { sharedStoreActions } from '@marketplace/web-store/data-access/shared'

@Injectable({
  providedIn: 'root'
})
export class AppFacadeService {
  private store: Store<WebStoreStoreState> = inject(Store<WebStoreStoreState>)

  public homeButtonClicked(): void {
    this.store.dispatch(sharedStoreActions.onHomeButtonClicked())
  }

  public basketButtonClicked(): void {
    this.store.dispatch(sharedStoreActions.onBasketButtonClicked())
  }
}
