import { LoginModule } from './core/login/login.module';
import { DashboardModule } from './core/dashboard/dashboard.module';
import { BreadcrumbsService } from './shared/services/breadcrumbs.service';
import { BreadcrumbsModule } from './shared/components/breadcrumbs/breadcrumbs.module';
import { BaseService } from './shared/services/base.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, ApplicationRef, LOCALE_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValidInterceptor } from './shared/services/valid-interceptor';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { UsuarioModule } from './core/usuario/usuario.module';
import { MatAutocompleteModule, MatDialogModule } from '@angular/material';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { AuthGuardService } from './shared/auth/auth-guard.service';
import { AuthService } from './shared/auth/auth-service';
import { JwtHelper } from 'angular2-jwt';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { GlobalService } from './shared/services/global.service';
import { LivroModule } from './core/livro/livro.module';
import { AvaliacaoModule } from './core/avaliacao/avaliacao.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    NavbarModule,
    UsuarioModule,
    LivroModule,
    LoginModule,
    AvaliacaoModule,
    MatAutocompleteModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    BreadcrumbsModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpModule,
    MatDialogModule
  ],
  providers: [
    BaseService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ValidInterceptor,
      multi: true,
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    AuthService,
    AuthGuardService,
    JwtHelper,
    BreadcrumbsService,
    GlobalService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }