import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
import { MzToastService } from 'ng2-materialize';
import 'rxjs/Rx';
import 'rxjs/operator/distinctUntilChanged';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {
  usuario: any;
  logando = false;
  router: Router;
  appComponent: AppComponent;

  isLinear = true;
  livros = [];
  estados = ['Ruim', 'Bom', 'Ótimo'];

  editarAvaliacao = true;

  constructor(
    private _router: Router,
    private _appComponent: AppComponent,
    private _toastService: MzToastService,
    private _usuarioService: UsuarioService,
  ) {
    this.usuario = { nome: '' };
    this.router = _router;
    this.appComponent = _appComponent;
  }

  ngOnInit() {
  }

  statusEditarAvaliacao() {
    this._router.navigateByUrl('admin');
  }

  pesquisaUsuario() {

    this._usuarioService.buscarUsuario(this.usuario.nome).subscribe((response: any) => {

      if (response[0]) {
        console.log(response[0].id);
        this._router.navigate(['avaliar'], { queryParams: { UsuarioId: response[0].id } });
      } else {
        this.notificacao('Usuário inválido', 'red');
      }
    });
  }

  limpaUsuario() {
    this.usuario.id = false;
  }

  validaUsuario() {
    return this.usuario.id ? true : false;
  }

  notificacao(mensagem: string, cor: any) {
    this._toastService.show(mensagem, 3000, cor);
  }

}
