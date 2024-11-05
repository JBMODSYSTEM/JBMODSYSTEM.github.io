import { TestBed } from '@angular/core/testing';

import { CompotasService } from '../compotas/compotas.service';

describe('CompotasService', () => {
  let service: CompotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
