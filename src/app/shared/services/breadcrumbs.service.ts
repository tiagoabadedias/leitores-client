import { Injectable } from '@angular/core';

@Injectable()
export class BreadcrumbsService {
  public breadcrumbs = [];

  constructor() { }

  setaBreadcrumb(breadcrumbs) {
    this.breadcrumbs = breadcrumbs;
  }

}
