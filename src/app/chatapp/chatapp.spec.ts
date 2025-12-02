import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chatapp } from './chatapp';

describe('Chatapp', () => {
  let component: Chatapp;
  let fixture: ComponentFixture<Chatapp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Chatapp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chatapp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
