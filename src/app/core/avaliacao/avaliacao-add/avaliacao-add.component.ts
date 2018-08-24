import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';
import { AvaliacaoService } from '../avaliacao.service';
import { AppComponent } from '../../../app.component';
import { MzToastService } from 'ng2-materialize';
import { LivroService } from '../../livro/livro.service';

@Component({
  selector: 'app-avaliacao-add',
  templateUrl: './avaliacao-add.component.html',
  styleUrls: ['./avaliacao-add.component.css']
})
export class AvaliacaoAddComponent implements OnInit {

  avaliacao: any;
  usuario: any;
  logando = false;
  router: Router;
  appComponent: AppComponent;

  isLinear = true;
  livros = [];
  estados = ['Ótimo', 'Bom', 'Ruim', 'Regular'];
  notas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  editarAvaliacao = true;

  constructor(
    private _avaliacaoService: AvaliacaoService,
    private _livroService: LivroService,
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
    private _toastService: MzToastService,
    private _activatedRouter: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.avaliacao = {UsuarioId: '', estadoConservacao: '', nota: 0, observacao: '' };
    this.getLivros();
    this._activatedRouter.queryParams
    .subscribe(async (params: any) => {
      console.log(params['UsuarioId']);
      if (params['UsuarioId']) {
        this.avaliacao.UsuarioId = params['UsuarioId'];
      }
    });
  }

  notificacao(mensagem: string, cor: any) {
    this._toastService.show(mensagem, 3000, cor);
  }

  getLivros() {
    this._livroService.getAll().subscribe(response => {
      console.log(response);
      this.livros = response;
    });
  }

  enviar(modal) {

    if (this.avaliacao.LivroId && this.avaliacao.estadoConservacao && this.avaliacao.nota && this.avaliacao.observacao) {
      this._avaliacaoService
        .save(this.avaliacao)
        .subscribe((resposta) => {
          if (resposta.id) {
            this.notificacao('Avaliação registrada', 'green');
            modal.open();
          } else {
            this.notificacao(resposta, 'red');
          }
      });
    } else {
      this.notificacao('Todos os campos devem ser preenchidos', 'blue');
    }
  }

  limparAvaliacao() {
    this.avaliacao.LivroId = '';
    this.avaliacao.estadoConservacao = '';
    this.avaliacao.observacao = '';
    this.avaliacao.nota = 0;
  }

  iniciarNovaAvaliacao() {
    this._router.navigate(['']);
  }

}
