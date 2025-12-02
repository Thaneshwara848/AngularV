import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reactivedrivenform } from './reactivedrivenform';

describe('Reactivedrivenform', () => {
  let component: Reactivedrivenform;
  let fixture: ComponentFixture<Reactivedrivenform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Reactivedrivenform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Reactivedrivenform);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
