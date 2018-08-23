import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { API } from './../carga';

@Injectable()
export class BaseService {

    private _urlServico: string = API;

    constructor(private httpClient: HttpClient) { }

    get<Object>(url: string, id: string, loading: boolean = false): Observable<Object> {
        const headers = new HttpHeaders();
        return this.httpClient.get<Object>(`${this._urlServico}/${url}/${id}`, { headers: headers });
    }

    getByParams<Object>(url: string, parametros: any = [], loading: boolean = false): Observable<Object> {
        const headers = new HttpHeaders();
        let query = new HttpParams();
        parametros.forEach(item => {
            query = query.append(item.referencia, item.valor);
        });
        return this.httpClient.get<Object>(`${this._urlServico}/${url}`, { headers: headers, params: query });
    }

    getAll<Object>(url: string, loading: boolean = false): Observable<Object[]> {
        const headers = new HttpHeaders();
        return this.httpClient.get<Object[]>(`${this._urlServico}/${url}`, { headers: headers });
    }

    getAllByParams<Object>(url: string, parametros: any = [], loading: boolean = false): Observable<Object[]> {
        const headers = new HttpHeaders();
        let query = new HttpParams();
        parametros.forEach(item => {
            query = query.append(item.property, item.value);
        });
        return this.httpClient.get<Object[]>(`${this._urlServico}/${url}`, { headers: headers, params: query });
    }

    put<Object>(url: string, data: any, id: string): Observable<Object> {
        return this.httpClient.put<Object>(`${this._urlServico}/${url}/${id}`, data);
    }

    delete<Object>(url: string, id: string): Observable<Object> {
        return this.httpClient.delete<Object>(`${this._urlServico}/${url}/${id}`);
    }

    post<Object>(url: string, data: any): Observable<Object> {
        return this.httpClient.post<Object>(`${this._urlServico}/${url}`, data);
    }
}
