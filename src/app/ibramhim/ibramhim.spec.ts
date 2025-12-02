import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ibramhim } from './ibramhim';

describe('Ibramhim', () => {
  let component: Ibramhim;
  let fixture: ComponentFixture<Ibramhim>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ibramhim]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ibramhim);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
