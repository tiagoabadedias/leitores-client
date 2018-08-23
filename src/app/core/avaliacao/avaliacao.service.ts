import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BaseService } from './../../shared/services/base.service';

@Injectable()
export class AvaliacaoService {
  _url = 'livro-avaliacao';

  constructor(private _http: HttpClient, private _baseService: BaseService) {
  }

  getAll(query): Observable<any[]> {
    return this._baseService.getAllByParams<any>(this._url, query);
  }

  save(avaliacao: any): Observable<any> {
    return this._baseService.post(this._url, avaliacao)
    .map((retorno: any) => {
        return retorno;
      }
    );
  }

}
