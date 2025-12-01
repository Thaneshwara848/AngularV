import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directivesdemo } from './directivesdemo';

describe('Directivesdemo', () => {
  let component: Directivesdemo;
  let fixture: ComponentFixture<Directivesdemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Directivesdemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directivesdemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
