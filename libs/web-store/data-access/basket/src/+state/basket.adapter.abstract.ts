import { ProductSummary } from "@marketplace/web-store/data-access/types";
import { Observable } from "rxjs";

export abstract class BasketAdapterAbstract {
  public abstract listenProducts(): Observable<ProductSummary[]>;

  public abstract increaseProductClicked(product: ProductSummary): void;
  public abstract decreaseProductClicked(product: ProductSummary): void;
  public abstract removeProductClicked(product: ProductSummary): void;
  public abstract clearBasketClicked(): void;
  public abstract checkoutClicked(): void;
  public abstract checkoutTheStoreClicked(): void;
}
