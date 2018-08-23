import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreadcrumbsService } from '../../../shared/services/breadcrumbs.service';
import { MatTableDataSource } from '@angular/material';
import { AvaliacaoService } from '../avaliacao.service';

@Component({
  selector: 'app-avaliacao-lista',
  templateUrl: './avaliacao-lista.component.html',
  styleUrls: ['./avaliacao-lista.component.css']
})
export class AvaliacaoListaComponent implements OnInit {

  avaliacoes;
  urlLivroCadastro = '/avaliacoes/cadastro';
  displayedColumns = ['observacao', 'nota', 'estadoConservacao', 'livro'];
  breadcrumbs = [
    { link: '/avaliacoes', title: 'Avaliações' }
  ];
  pages = [];
  search;
  page;
  property;
  order = 'asc';
  limit;

  constructor(
    private _avaliacaoService: AvaliacaoService,
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.page = 1;
    this.limit = 5;
    this.property = 'observacao';
    this.order = 'asc';
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
    this.getAvaliacoes();
  }

  applyFilter(filter: string) {
    filter.trim();
    filter.toLowerCase();
    this.avaliacoes.filter = filter;
  }

  alteraOrder(property) {
    this.property = property;

    if (this.order === 'asc') {
      this.order = 'desc';
    } else {
      this.order = 'asc';
    }

    this.getAvaliacoes();
  }

  anterior(page) {
    if (this.page > 1) {
      this.page--;
      this.getAvaliacoes();
    }
  }

  proximo(page) {
    if (this.page < (this.pages.length)) {
      this.page++;
      this.getAvaliacoes();
    }
  }

  getAvaliacoes() {

    // tslint:disable-next-line:prefer-const
    let query = [
      { property: 'page', value: this.page },
      { property: 'limit', value: this.limit },
      { property: 'property', value: this.property },
      { property: 'order', value: this.order },
    ];

    if (this.search && this.search !== '') {
      query.push({ property: 'search', value: this.search });
    }

    this._avaliacaoService.getAll(query).subscribe((response: any) => {
      this.pages = [];

      // tslint:disable-next-line:curly
      for (let i = 0; i < response.pages; i++) {
        this.pages.push(i + 1);
      }
      this.avaliacoes = response.avaliacao;
    });
  }

  editar(id: string) {
    this._router.navigate([this.urlLivroCadastro], { queryParams: { 'id': id } });
  }

  toLower(string) {
    // tslint:disable-next-line:curly
    if (!string) return '';
    return string.toLowerCase();
  }

}
