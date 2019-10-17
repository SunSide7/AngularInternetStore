import { TestBed } from '@angular/core/testing';

import { DialogModalService } from './dialog-modal.service';

describe('DialogModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogModalService = TestBed.get(DialogModalService);
    expect(service).toBeTruthy();
  });
});
