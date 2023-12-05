import { TestBed } from '@angular/core/testing';

import { PostsInterceptorService } from './posts-interceptor.service';

describe('PostsInterceptorService', () => {
  let service: PostsInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
