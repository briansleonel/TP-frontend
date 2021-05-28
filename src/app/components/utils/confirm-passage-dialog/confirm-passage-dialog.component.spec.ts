import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPassageDialogComponent } from './confirm-passage-dialog.component';

describe('ConfirmPassageDialogComponent', () => {
  let component: ConfirmPassageDialogComponent;
  let fixture: ComponentFixture<ConfirmPassageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmPassageDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPassageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
