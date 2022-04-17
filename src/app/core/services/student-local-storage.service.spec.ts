import { TestBed } from '@angular/core/testing';

import { StudentLocalStorageService } from './student-local-storage.service';

describe('StudentLocalStorageService', () => {
  let service: StudentLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
