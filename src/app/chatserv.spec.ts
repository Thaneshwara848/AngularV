import { TestBed } from '@angular/core/testing';

import { Chatserv } from './chatserv';

describe('Chatserv', () => {
  let service: Chatserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Chatserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
