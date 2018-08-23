import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class UsuarioService {
  _url = 'usuario';

  constructor(private _http: HttpClient, private _baseService: BaseService) {
  }

}
