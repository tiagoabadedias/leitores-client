import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';
import { MatTableDataSource } from '@angular/material';
import { LivroService } from '../livro.service';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  livros;
  livroDelete;
  urlLivroCadastro = '/livros/cadastro';
  // tslint:disable-next-line:max-line-length
  displayedColumns = ['nome', 'totalAvaliacoes', 'mediaNota', 'percentualOtimo', 'percentualBom', 'percentualRuim', 'percentualRegular', 'acoes'];
  breadcrumbs = [
    { link: '/livros', title: 'Livros' }
  ];

  constructor(
    private _livroService: LivroService,
    private _toastService: MzToastService,
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.getLivros();
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
  }

  applyFilter(filter: string) {
    filter.trim();
    filter.toLowerCase();
    this.livros.filter = filter;
  }

  getLivros() {
    this.livros = undefined;
    this._livroService.getAll().subscribe(response => {
      this.livros = new MatTableDataSource(response);
      this.livros.filterPredicate = (data: any, filter: string) => {
        return data.nome.includes(filter);
      };
    });
  }

  editar(id: string) {
    console.log(id);
    this._router.navigate([this.urlLivroCadastro], { queryParams: { 'id': id } });
  }

  buscar(letra: string) {
    this._livroService.buscarLivro(letra)
      .subscribe(response => this.livros = response);
  }

  delete() {
    if (this.livroDelete) {
      this._livroService.delete(this.livroDelete)
        .subscribe((response: any) => {
          this.getLivros();
          this.notificacao('Livro deletado', 'green');
          this.livros = response;
        });
    }
  }

  formataNumero(numero) {
    return numero && (numero !== '0.0000') ? Number(numero).toFixed(2) : '-';
  }

  notificacao(mensagem: string, cor: any) {
    this._toastService.show(mensagem, 3000, cor);
  }

}
