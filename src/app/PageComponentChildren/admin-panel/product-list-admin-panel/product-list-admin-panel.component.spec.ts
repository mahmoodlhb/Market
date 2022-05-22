import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListAdminPanelComponent } from './product-list-admin-panel.component';

describe('ProductListAdminPanelComponent', () => {
  let component: ProductListAdminPanelComponent;
  let fixture: ComponentFixture<ProductListAdminPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListAdminPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListAdminPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
