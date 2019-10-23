import { TestBed } from '@angular/core/testing';

import { SharedeventService } from './sharedevent.service';

describe('SharedeventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedeventService = TestBed.get(SharedeventService);
    expect(service).toBeTruthy();
  });
});
