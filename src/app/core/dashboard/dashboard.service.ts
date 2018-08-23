import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DashboardService {

  constructor(
    private _baseService: BaseService
  ) { }

}
