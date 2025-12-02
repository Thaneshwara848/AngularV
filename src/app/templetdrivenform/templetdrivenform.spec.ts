import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templetdrivenform } from './templetdrivenform';

describe('Templetdrivenform', () => {
  let component: Templetdrivenform;
  let fixture: ComponentFixture<Templetdrivenform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Templetdrivenform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templetdrivenform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
