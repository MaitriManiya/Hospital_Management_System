import { TestBed } from '@angular/core/testing';

import { ConnectBeService } from './connect-be.service';

describe('ConnectBeService', () => {
  let service: ConnectBeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnectBeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
