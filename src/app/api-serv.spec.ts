import { TestBed } from '@angular/core/testing';

import { ApiServ } from './api-serv';

describe('ApiServ', () => {
  let service: ApiServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
