import { BreadcrumbsModule } from './../breadcrumbs/breadcrumbs.module';
import { MaterializeModule } from 'ng2-materialize';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterializeModule,
    BreadcrumbsModule,
    LazyLoadImageModule,
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [
    NavbarComponent,
    NavbarMenuComponent,
  ]
})
export class NavbarModule { }
