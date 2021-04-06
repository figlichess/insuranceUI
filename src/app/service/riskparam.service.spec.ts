import { TestBed } from '@angular/core/testing';

import { RiskparamService } from './riskparam.service';

describe('RiskparamService', () => {
  let service: RiskparamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiskparamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
