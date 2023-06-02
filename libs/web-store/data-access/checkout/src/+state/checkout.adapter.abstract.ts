import { ProductSummary } from "@marketplace/web-store/data-access/types";
import { Observable } from "rxjs";

export abstract class CheckoutAdapterAbstract {
  public abstract listenProducts(): Observable<ProductSummary[]>;

  public abstract proceedToPaymentClicked(): void;
}
