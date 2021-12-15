import { TestBed } from '@angular/core/testing';
import { map, of } from 'rxjs';

import { ApiClientRequestHandlerService } from './api-client-request-handler.service';

describe('ApiClientRequestHandlerService', () => {
  const json: any = {feed: {entry: []}};
  let service: ApiClientRequestHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiClientRequestHandlerService
      ]
    });
    service = TestBed.inject(ApiClientRequestHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null', (done: DoneFn) => {
    const obs = of(undefined)
    const mapper = (res: any) => { return res; };
    service.handle(obs, mapper)
      .then(data => {
        expect(data).toEqual(null);
        done();
      })
  });

  it('should return json', (done: DoneFn) => {
    const obs = of(json)
    const mapper = (res: any) => { return res; };
    service.handle(obs, mapper)
      .then(data => {
        expect(data).toEqual(json);
        done();
      })
  });

  it('should reject', (done: DoneFn) => {
    const obs = of(json)
    const mapper = (res: any) => { throw new Error('Expected error'); };
    service.handle(obs, mapper)
      .catch(err => {
        expect(err).toBeDefined();
        done();
      })
  });

  it('should reject', (done: DoneFn) => {
    const obs = of(json).pipe(
      map(data => {throw new Error('Expected error')}),
    );
    const mapper = (res: any) => { return res; };
    service.handle(obs, mapper)
      .catch(err => {
        expect(err).toBeDefined();
        done();
      })
  });
});
