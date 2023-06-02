import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductSummaryTableComponent } from './product-summary-table.component';

describe('ProductSummaryTableComponent', () => {
  let component: ProductSummaryTableComponent;
  let fixture: ComponentFixture<ProductSummaryTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSummaryTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductSummaryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
