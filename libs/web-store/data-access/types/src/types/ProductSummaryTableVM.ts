import { ProductSummary } from "./ProductSummary";

export interface ProductSummaryTableVM {
  products: ProductSummary[];
  displayedColumns: string[];
  isEdit: boolean;
  totalPrice: number;
  useBoxShadow: boolean;
}
