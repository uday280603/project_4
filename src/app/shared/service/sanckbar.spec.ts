import { TestBed } from '@angular/core/testing';
import { Sanckbar } from './sanckbar';

describe('Sanckbar', () => {
  let service: Sanckbar;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sanckbar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
