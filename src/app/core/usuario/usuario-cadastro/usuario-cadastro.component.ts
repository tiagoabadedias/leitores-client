import { BreadcrumbsService } from './../../../shared/services/breadcrumbs.service';
import { Component, OnInit } from '@angular/core';
import { FormStatus } from '../../../domains/enums/formStatus.enum';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from '../usuario.service';
import { AuthService } from '../../../shared/auth/auth-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MzToastService, MzModalService } from 'ng2-materialize';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit {

  usuario: any;
  form: FormGroup;
  formStatus: FormStatus;
  perfis: any[];
  modulosEnum: any;
  isLoading: boolean = true;

  value = '';
  breadcrumbs = [
    { link: '/usuarios', title: 'Usuários' },
    { link: '/usuarios/cadastro', title: 'Cadastro' }
  ];

  constructor(
    private _toastService: MzToastService,
    private _router: Router,
    private _authService: AuthService,
    private _activatedRouter: ActivatedRoute,
    private _http: HttpClient,
    private _usuarioService: UsuarioService,
    private _breadcrumbsService: BreadcrumbsService,
  ) {

    this.usuario = {};
    this.formStatus = FormStatus.CREATE;

    this._activatedRouter.queryParams.subscribe((params: any) => {
      if (params['id']) {
        this.formStatus = FormStatus.UPDATE;
        this._usuarioService.get(params['id']).subscribe((resposta) => {
          this.usuario = resposta;
          this.usuario.id = params['id'];
          this.usuario.usuario = resposta.usuario;
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  ngOnInit() {
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
  }

  create() {
    this._usuarioService
      .save(this.usuario)
      .subscribe((resposta) => {
        this.notificacao('Usuário criado', 'green');
        this._router.navigateByUrl('/usuarios');
      });
  }

  update() {
    this._usuarioService
      .update(this.usuario)
      .subscribe((resposta) => {
        this.notificacao('Usuário atualizado', 'green');
        this._router.navigateByUrl('/usuarios');
      });
  }

  save(event: any) {
    if (this.formStatus == FormStatus.CREATE) {
      this.create();
    } else if (this.formStatus == FormStatus.UPDATE) {
      this.update();
    }
  }

  notificacao(mensagem: string, cor: any) {
    this._toastService.show(mensagem, 3000, cor);
  }

}
