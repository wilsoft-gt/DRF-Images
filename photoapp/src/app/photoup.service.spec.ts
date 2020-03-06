import { TestBed } from '@angular/core/testing';

import { PhotoupService } from './photoup.service';

describe('PhotoupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoupService = TestBed.get(PhotoupService);
    expect(service).toBeTruthy();
  });
});
