import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Databind } from './databind';

describe('Databind', () => {
  let component: Databind;
  let fixture: ComponentFixture<Databind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Databind]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Databind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
