import { TestBed } from '@angular/core/testing';
import { map, of, throwError } from 'rxjs';

import { ApiClientRequestHandlerService } from './api-client-request-handler.service';

describe('ApiClientRequestHandlerService', () => {
  const json: any = {feed: {entry: []}};
  let service: ApiClientRequestHandlerService;
  let mapperSpy: jasmine.Spy<jasmine.Func>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ApiClientRequestHandlerService
      ]
    });
    service = TestBed.inject(ApiClientRequestHandlerService);
    mapperSpy = jasmine.createSpy('mapper');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null, mapper should not be called', (done: DoneFn) => {
    const obs = of(undefined)
    
    service.handle(obs, mapperSpy)
      .then(data => {
        expect(data).toEqual(null);
        expect(mapperSpy.calls.count()).toBe(0);
        done();
      }).catch(err => {
        done.fail();
      });
  });

  it('should return json, mapper should be called', (done: DoneFn) => {
    const obs = of(json)
    mapperSpy.withArgs(json).and.returnValue(json);

    service.handle(obs, mapperSpy)
      .then(data => {
        expect(data).toEqual(json);
        expect(mapperSpy.calls.count()).toBe(1);
        done();
      }).catch(err => {
        done.fail();
      });
  });

  it('should reject (error in mapper), mapper should be called', (done: DoneFn) => {
    const obs = of(json)
    mapperSpy.withArgs(json).and.throwError('expected error message');

    service.handle(obs, mapperSpy)
      .then(data => {
        done.fail('an error expected');
      })
      .catch(err => {
        expect(err).toBeDefined();
        expect(mapperSpy.calls.count()).toBe(1);
        expect(mapperSpy).toThrow();
        done();
      })
  });

  it('should reject, mapper should not be called', (done: DoneFn) => {
    const obs = throwError(() => new Error('Expected error message'));
    
    service.handle(obs, mapperSpy)
      .then(data => {
        done.fail('an error expected');
      })
      .catch(err => {
        expect(err).toBeDefined();
        expect(err.message).toBe('Expected error message');
        expect(mapperSpy.calls.count()).toBe(0);
        done();
      })
  });
});
