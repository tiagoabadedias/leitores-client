import { AuthService } from './../../auth/auth-service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../../core/usuario/usuario.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  usuarioLogado: any;
  imagemUsuario: any = 'assets\/images\/user-default.png';

  constructor(
    private _authService: AuthService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.isLoggedIn = this._authService.isLoggedIn;
    this.usuarioLogado = this._authService.getUsuarioLogado();

    if (this.usuarioLogado) {
      this._usuarioService.get(this.usuarioLogado.usuario.id).subscribe((usuario: any) => {
        this.imagemUsuario = usuario.imagem ? usuario.imagem : 'assets\/images\/user-default.png';
      });
    }

    this._authService.isLoggedIn.subscribe((isLogged) => {
      if (isLogged) {
        this.usuarioLogado = this._authService.getUsuarioLogado();
        this._usuarioService.get(this.usuarioLogado.usuario.id).subscribe((usuario: any) => {
          this.imagemUsuario = usuario.imagem ? usuario.imagem : 'assets\/images\/user-default.png';
        });
      }
    });
  }

}
