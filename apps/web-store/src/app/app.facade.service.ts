
import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { WebStoreStoreState } from './+state/store.state';
import { webStoreStoreActions } from './+state/store.actions';

@Injectable({
  providedIn: 'root'
})
export class HomeFacadeService {
  private store: Store<WebStoreStoreState> = inject(Store<WebStoreStoreState>)

  public homeButtonClicked(): void {
    this.store.dispatch(webStoreStoreActions.onHomeButtonClicked())
  }

  public basketButtonClicked(): void {
    this.store.dispatch(webStoreStoreActions.onBasketButtonClicked())
  }
}
