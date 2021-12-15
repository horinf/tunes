import { Injectable } from '@angular/core';

@Injectable()
export class ApiClientRouteBuilderService {

constructor(
) {}

/** Building a route based on a base url with optional adding a path */
public build(baseUrl: string, ...routes: string[]): string {
  let url = baseUrl;
  if (routes && routes.length > 0) {
    routes.forEach(route => {
      url += `/${route}`;
    });
  }
  return url;
}
}
