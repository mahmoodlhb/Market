import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListItemHomeComponent } from './product-list-item-home.component';

describe('ProductListItemHomeComponent', () => {
  let component: ProductListItemHomeComponent;
  let fixture: ComponentFixture<ProductListItemHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListItemHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
