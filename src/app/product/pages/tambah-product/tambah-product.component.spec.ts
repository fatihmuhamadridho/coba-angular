import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TambahProductComponent } from './tambah-product.component';

describe('TambahProductComponent', () => {
  let component: TambahProductComponent;
  let fixture: ComponentFixture<TambahProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TambahProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
