import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideNoticiaComponent } from './slide-noticia.component';

describe('SlideNoticiaComponent', () => {
  let component: SlideNoticiaComponent;
  let fixture: ComponentFixture<SlideNoticiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideNoticiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
