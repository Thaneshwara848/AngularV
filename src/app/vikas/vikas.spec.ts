import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vikas } from './vikas';

describe('Vikas', () => {
  let component: Vikas;
  let fixture: ComponentFixture<Vikas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vikas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vikas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
