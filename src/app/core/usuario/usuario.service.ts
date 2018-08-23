import { Injectable } from '@angular/core';
import { BaseService } from '../../shared/services/base.service';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UsuarioService {

  private _url = 'usuario';

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

  save(usuario: any): Observable<any> {
    return this._baseService.post('usuario', usuario)
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

  update(usuario: any): Observable<any> {
    return this._baseService.put('usuario', usuario, usuario.id)
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

  updateImagem(imagem, idUsuario): Observable<any> {
    return this._baseService.put('usuario', imagem, idUsuario)
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

  buscarUsuario(termo: string, ignoreLoading: boolean = false): Observable<any[]> {
    const url = this._url + '/buscar/' + termo;
    return this._baseService.getAll<any>(url, ignoreLoading);
  }

  delete(usuario: any): Observable<any> {
    return this._baseService.delete(this._url, usuario.id)
      .map((retorno: any) => {
        return retorno;
      }
      );
  }

}
