import { TestBed } from '@angular/core/testing';

import { InMemService } from './in-mem.service';

describe('InMemService', () => {
  let service: InMemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InMemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
