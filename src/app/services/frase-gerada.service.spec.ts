import { TestBed } from '@angular/core/testing';

import { FraseGeradaService } from './frase-gerada.service';

describe('FraseGeradaService', () => {
  let service: FraseGeradaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraseGeradaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
