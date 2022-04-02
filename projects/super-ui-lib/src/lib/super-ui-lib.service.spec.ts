import { TestBed } from '@angular/core/testing';

import { SuperUiLibService } from './super-ui-lib.service';

describe('SuperUiLibService', () => {
  let service: SuperUiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperUiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
