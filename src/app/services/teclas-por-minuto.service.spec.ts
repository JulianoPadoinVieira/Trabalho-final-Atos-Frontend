import { TestBed } from '@angular/core/testing';

import { TeclasPorMinutoService } from './teclas-por-minuto.service';

describe('TeclasPorMinutoService', () => {
  let service: TeclasPorMinutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeclasPorMinutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
