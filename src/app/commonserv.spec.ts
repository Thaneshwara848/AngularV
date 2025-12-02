import { TestBed } from '@angular/core/testing';

import { Commonserv } from './commonserv';

describe('Commonserv', () => {
  let service: Commonserv;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Commonserv);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
