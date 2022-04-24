import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebasPipeComponent } from './pruebas-pipe.component';

describe('PruebasPipeComponent', () => {
  let component: PruebasPipeComponent;
  let fixture: ComponentFixture<PruebasPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebasPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebasPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
