/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TrasferenciaService } from './trasferencia.service';

describe('Service: Trasferencia', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrasferenciaService]
    });
  });

  it('should ...', inject([TrasferenciaService], (service: TrasferenciaService) => {
    expect(service).toBeTruthy();
  }));
});
