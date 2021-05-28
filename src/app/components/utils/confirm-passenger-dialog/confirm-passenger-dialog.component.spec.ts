import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPassengerDialogComponent } from './confirm-passenger-dialog.component';

describe('ConfirmPassengerDialogComponent', () => {
  let component: ConfirmPassengerDialogComponent;
  let fixture: ComponentFixture<ConfirmPassengerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPassengerDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPassengerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
