import { TestBed } from '@angular/core/testing';

import { PaginaDataService } from './pagina-data.service';

describe('PaginaDataService', () => {
  let service: PaginaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaginaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
