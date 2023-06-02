import { Observable } from "rxjs";

export abstract class SuccessAdapterAbstract {
  public abstract listenTotalPrice(): Observable<number>;

  public abstract onGoHomeClicked(): void;
}
