import { Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './shared/auth/auth-guard.service';
import { UsuarioComponent } from './core/usuario/usuario.component';
import { UsuarioListaComponent } from './core/usuario/usuario-lista/usuario-lista.component';
import { UsuarioCadastroComponent } from './core/usuario/usuario-cadastro/usuario-cadastro.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { LivroComponent } from './core/livro/livro.component';
import { LivroListaComponent } from './core/livro/livro-lista/livro-lista.component';
import { LivroCadastroComponent } from './core/livro/livro-cadastro/livro-cadastro.component';
import { LoginComponent } from './core/login/login.component';
import { AvaliacaoComponent } from './core/avaliacao/avaliacao.component';
import { AvaliacaoListaComponent } from './core/avaliacao/avaliacao-lista/avaliacao-lista.component';
import { AvaliacaoAddComponent } from './core/avaliacao/avaliacao-add/avaliacao-add.component';

export const ROUTES: Routes = [
  { path: 'inicio', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '', component: AvaliacaoComponent },
  { path: 'avaliar', component: AvaliacaoAddComponent },
  { path: 'admin', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: 'usuarios', component: UsuarioComponent, children: [
      { path: '', component: UsuarioListaComponent },
      { path: 'cadastro', component: UsuarioCadastroComponent },
      { path: 'editar/:id', component: UsuarioCadastroComponent }
    ], canActivate: [AuthGuard]
  },
  {
    path: 'livros', component: LivroComponent, children: [
      { path: '', component: LivroListaComponent },
      { path: 'cadastro', component: LivroCadastroComponent },
      { path: 'editar/:id', component: LivroCadastroComponent }
    ], canActivate: [AuthGuard]
  },
  {
    path: 'avaliacoes', component: AvaliacaoListaComponent, canActivate: [AuthGuard]
  }
];
