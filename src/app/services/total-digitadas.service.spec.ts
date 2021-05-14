import { TestBed } from '@angular/core/testing';

import { TotalDigitadasService } from './total-digitadas.service';

describe('TotalDigitadasService', () => {
  let service: TotalDigitadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalDigitadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
