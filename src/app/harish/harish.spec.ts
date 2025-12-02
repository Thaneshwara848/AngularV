import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Harish } from './harish';

describe('Harish', () => {
  let component: Harish;
  let fixture: ComponentFixture<Harish>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Harish]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Harish);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
