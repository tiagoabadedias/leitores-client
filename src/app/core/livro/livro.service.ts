import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LivroService {

  private _url = 'livro';

  constructor(
    private _http: HttpClient,
    private _baseService: BaseService
  ) { }

  getAll(): Observable<any[]> {
    return this._baseService.getAll<any>(this._url);
  }

  get(id: string): Observable<any> {
    return this._baseService.get<any>(this._url, id);
  }

  save(livro: any): Observable<any> {
    return this._baseService.post(this._url, livro)
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

  update(livro: any): Observable<any> {
    return this._baseService.put(this._url, livro, livro.id)
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

  buscarLivro(termo: string, ignoreLoading: boolean = false): Observable<any[]> {
    const url = this._url + '/buscar/' + termo;
    return this._baseService.getAll<any>(url, ignoreLoading);
  }

  delete(livro: any): Observable<any> {
    return this._baseService.delete(this._url, livro.LivroIdReferencia)
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

}
