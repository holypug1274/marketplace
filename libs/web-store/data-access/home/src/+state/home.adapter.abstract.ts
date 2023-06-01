import { Product } from "@marketplace/web-store/data-access/types";
import { Observable } from "rxjs";

export abstract class HomeAdapterAbstract {
  public abstract listenProducts(): Observable<Product[]>;

  public abstract addToBasketClicked(product: Product): void;
}
