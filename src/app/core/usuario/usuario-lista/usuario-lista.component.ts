import { BreadcrumbsService } from './../../../shared/services/breadcrumbs.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MzToastService } from 'ng2-materialize';

@Component({
  selector: 'app-usuario-lista',
  templateUrl: './usuario-lista.component.html',
  styleUrls: ['./usuario-lista.component.css']
})
export class UsuarioListaComponent implements OnInit {

  usuarios;
  usuarioDelete;
  urlUsuarioCadastro = '/usuarios/cadastro';
  displayedColumns = ['usuario', 'livros', 'mediaNota', 'acoes'];
  breadcrumbs = [
    { link: '/usuarios', title: 'Usuários' }
  ];

  constructor(
    private _usuarioService: UsuarioService,
    private _toastService: MzToastService,
    private _router: Router,
    private _breadcrumbsService: BreadcrumbsService,
  ) {
  }

  ngOnInit() {
    this.getUsuarios();
    this._breadcrumbsService.setaBreadcrumb(this.breadcrumbs);
  }

  applyFilter(filter: string) {
    filter.trim();
    filter.toLowerCase();
    this.usuarios.filter = filter;
  }

  getUsuarios() {
    this.usuarios = undefined;
    this._usuarioService.getAll().subscribe(response => {
      this.usuarios = new MatTableDataSource(response);
      this.usuarios.filterPredicate = (data: any, filter: string) => {
        return data.usuario.includes(filter);
      };
    });
  }

  editar(id: string) {
    this._router.navigate([this.urlUsuarioCadastro], { queryParams: { 'id': id } });
  }

  buscar(letra: string) {
    this._usuarioService.buscarUsuario(letra)
      .subscribe(response => this.usuarios = response);
  }

  delete() {
    this._usuarioService.delete(this.usuarioDelete)
      .subscribe((response: any) => {
        this.getUsuarios();
        this.notificacao('Usuário deletado', 'green');
        this.usuarios = response;
      });
  }

  notificacao(mensagem: string, cor: any) {
    this._toastService.show(mensagem, 3000, cor);
  }

}
