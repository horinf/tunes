import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApiClientRequestHandlerService {

constructor(
) { }

  public handle<T>(request: Observable<any>, mapper: (res: any) => T | null): Promise<T | null> {
    const promise = new Promise<T | null>((resolve, reject) => {
      request.subscribe({
        next: (data) => {
          if (!data) {
            resolve(null);
            return;
          }

          try {
            const val = mapper(data);
            resolve(val);
          } catch (error) {
            reject(error);
          }
        },
        error: (error) => {
          // an error handler could be here
          reject(error);
        },
        complete: () => {
          // if request was canceled here we need to resolve or reject promise
        }
      });
    });

    return promise;
  }
}
