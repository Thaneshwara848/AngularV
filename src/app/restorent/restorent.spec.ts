import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restorent } from './restorent';

describe('Restorent', () => {
  let component: Restorent;
  let fixture: ComponentFixture<Restorent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Restorent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restorent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
