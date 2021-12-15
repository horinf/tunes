import { TestBed } from '@angular/core/testing';

import { ApiClientRouteBuilderService } from './api-client-route-builder.service';

describe('ApiClientRouteBuilderService', () => {
  let service: ApiClientRouteBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiClientRouteBuilderService
      ]
    });
    service = TestBed.inject(ApiClientRouteBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should build a route', () => {
    const url = service.build('http://my.domain.com', 'path1', 'path2');
    expect(url).toEqual('http://my.domain.com/path1/path2');
  });
});
