import { Component, OnInit } from '@angular/core';
import { MzToastService } from 'ng2-materialize';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/auth/auth-service';
import { HttpClient } from '@angular/common/http';
import { FormStatus } from '../../../domains/enums/formStatus.enum';
import { FormGroup } from '@angular/forms';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';
import { LivroService } from '../livro.service';

@Component({
  selector: 'app-livro-cadastro',
  templateUrl: './livro-cadastro.component.html',
  styleUrls: ['./livro-cadastro.component.css']
})
export class LivroCadastroComponent implements OnInit {


  livro: any;
  form: FormGroup;
  formStatus: FormStatus;
  perfis: any[];
  modulosEnum: any;
  isLoading: boolean = true;

  value = '';
  breadcrumbs = [
    { link: '/livros', title: 'Livros' },
    { link: '/livros/cadastro', title: 'Cadastro' }
  ];

  constructor(
    private _toastService: MzToastService,
    private _router: Router,
    private _authService: AuthService,
    private _activatedRouter: ActivatedRoute,
    private _http: HttpClient,
    private _livroService: LivroService,
    private _breadcrumbsService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.livro = {};
    this.formStatus = FormStatus.CREATE;

    this._activatedRouter.queryParams.subscribe((params: any) => {
      if (params['id']) {
        this.formStatus = FormStatus.UPDATE;
        this._livroService.get(params['id']).subscribe((resposta) => {
          this.livro = resposta;
          this.livro.id = params['id'];
          this.livro = resposta;
          this.isLoading = false;
        });
      } else {
        this.isLoading = false;
      }
    });
  }

  create() {
    this._livroService
      .save(this.livro)
      .subscribe((resposta) => {
        this.notificacao('Livro criado', 'green');
        this._router.navigateByUrl('/livros');
      });
  }

  update() {
    this._livroService
      .update(this.livro)
      .subscribe((resposta) => {
        this.notificacao('Livro atualizado', 'green');
        this._router.navigateByUrl('/livros');
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
