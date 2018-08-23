import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from './../../shared/auth/auth-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { API } from './../../shared/carga';
import { ROUTES } from '../../app.routes';
import { AppComponent } from '../../app.component';
import { MzToastService } from 'ng2-materialize';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/Rx';
import 'rxjs/operator/distinctUntilChanged';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: any;
  logando = false;
  router: Router;
  appComponent: AppComponent;
  form: FormGroup;

  constructor(
    private _router: Router,
    private _appComponent: AppComponent,
    private _authService: AuthService,
    private _toastService: MzToastService,
    private _formBuilder: FormBuilder
  ) {
    this.usuario = {};
    this.router = _router;
    this.appComponent = _appComponent;
  }

  ngOnInit() {
    this._authService.logout();

    this.form = this._formBuilder.group({
      usuario: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  logar() {
    this.logando = true;

    if (!this.form.valid) {
      this._toastService.show('Preencha os campos corretamente', 3000, 'blue');
      return;
    }

    this._authService
    .autenticar(this.form.value)
    .subscribe((resposta) => {
      if (resposta.token) {
        this.router.navigateByUrl('/inicio');
      }

      this.logando = false;
    }, (erro: HttpErrorResponse) => {
      this._toastService.show('Usuário ou senha incorretas', 3000, 'red');
      this.logando = false;
    });
  }
}
