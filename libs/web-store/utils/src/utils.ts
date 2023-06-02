import { SESSION_STORAGE_BASKET_KEY } from "@marketplace/web-store/data-access/constants";
import {
  Basket,
  Product, ProductSummary
} from "@marketplace/web-store/data-access/types";

function setBasketSessionStorage(basket: Basket): void {
  window.sessionStorage.setItem(SESSION_STORAGE_BASKET_KEY, JSON.stringify(basket))
}

export function getBasketSessionStorage(): Basket {
  const basketString: string | null = window.sessionStorage.getItem(SESSION_STORAGE_BASKET_KEY);
  return (basketString ? JSON.parse(basketString) : { products: {} }) as Basket;
}

export function addProductBasketSessionStorage(product: Product): void {
  const basket: Basket = getBasketSessionStorage()

  basket.products[product.id] ? basket.products[product.id]++ : basket.products[product.id] = 1;

  setBasketSessionStorage(basket)
}

export function decreaseProductBasketSessionStorage(product: Product): void {
  const basket: Basket = getBasketSessionStorage()

  basket.products[product.id] > 1 ? basket.products[product.id]-- : delete basket.products[product.id];

  setBasketSessionStorage(basket)
}

export function removeProductBasketSessionStorage(product: Product): void {
  const basket: Basket = getBasketSessionStorage()

  delete basket.products[product.id];

  setBasketSessionStorage(basket)
}

export function getProductsSummaryMappedFromBasketSessionStorage(products: Product[]): ProductSummary[] {
  const basket: Basket = getBasketSessionStorage();

  return products
    .filter(product => !!basket.products[product.id])
    .map(product => {
      return {
        id: product.id,
        title: product.title,
        price: product.price,
        quantity: basket.products[product.id],
        image: product.image
      } as ProductSummary
    })
}

export function getTotalProductsSummaryPrice(products: ProductSummary[]): number {
  return products.reduce((acc, product) => acc + product.price * product.quantity, 0)
}
