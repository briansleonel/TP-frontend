import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPasajeroComponent } from './find-pasajero.component';

describe('FindPasajeroComponent', () => {
  let component: FindPasajeroComponent;
  let fixture: ComponentFixture<FindPasajeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPasajeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPasajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
