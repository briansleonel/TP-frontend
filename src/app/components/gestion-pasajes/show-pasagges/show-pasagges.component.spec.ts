import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPasaggesComponent } from './show-pasagges.component';

describe('ShowPasaggesComponent', () => {
  let component: ShowPasaggesComponent;
  let fixture: ComponentFixture<ShowPasaggesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPasaggesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPasaggesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
