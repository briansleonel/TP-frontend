import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogsTraductorComponent } from './logs-traductor.component';

describe('LogsTraductorComponent', () => {
  let component: LogsTraductorComponent;
  let fixture: ComponentFixture<LogsTraductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogsTraductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogsTraductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
