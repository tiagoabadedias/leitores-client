import { Observable } from 'rxjs/Observable';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { MzToastService } from 'ng2-materialize';
import { AuthService } from './../../shared/auth/auth-service';
import { Router } from '@angular/router';

@Injectable()
export class ValidInterceptor implements HttpInterceptor {
	inj: Injector;
	router: Router;

	constructor(
		private _toastService: MzToastService,
		private _inj: Injector,
		private _router: Router,
	) {
		this.inj = _inj;
		this.router = _router;
	}

	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const authService = this.inj.get(AuthService);
		const clonedAutenticaRequest = this.authenticateRequest(request);


		return next.handle(clonedAutenticaRequest)
			.do((event: HttpEvent<any>) => {
				if (event instanceof HttpResponse) {
				}

			}, (error: HttpErrorResponse) => {
				if (error instanceof HttpErrorResponse) {

					if (error.status === 400) {
						this._toastService.show('Ops, erro interno do servidor', 3000, 'red');
					}

					if (error.status === 401 || error.status === 403) {
						authService
							.refreshToken()
							.map((data) => {
								if (data.token && data.token !== '') {
									localStorage.setItem('token', data.token);
									const clonedAutenticaRequestRepeat = this.authenticateRequest(request);
									return next.handle(clonedAutenticaRequestRepeat);
								} else {
									localStorage.removeItem('token');
									this.router.navigate(['/admin']);
								}
							});
					}

					if (error.status === 404) {
						this._toastService.show('Ops, item inexistente.', 3000, 'red');
					}

					if (error.status === 500) {

						if ((error.error.error.match('Cannot delete or update a parent') !== -1)) {
							this._toastService.show('Este registro não pode ser removido, pois possui vinculos', 3000, 'red');
						} else {
							this._toastService.show('Ops, problemas ao fazer conexão com servidor.', 3000, 'red');
						}
					}
				} else {
					return Observable.throw(new Error('Your custom error'));
				}
			});
	}

	private authenticateRequest(request: HttpRequest<any>): HttpRequest<any> {
		let autenticaRequest;
		if (request.url.split('.')[0].split('//')[1] != 'maps') {
			const token = localStorage.getItem('token') || '';

			autenticaRequest = request.clone({
				headers: request.headers.set('x-access-token', token),
				responseType: 'json',
			});
		} else {
			autenticaRequest = request.clone({
				responseType: 'json',
			});
		}
		return autenticaRequest;
	}
}
