import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNoticiasComponent } from './show-noticias.component';

describe('ShowNoticiasComponent', () => {
  let component: ShowNoticiasComponent;
  let fixture: ComponentFixture<ShowNoticiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowNoticiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
