import { MaterializeModule } from 'ng2-materialize';
import { BreadcrumbsService } from './../../services/breadcrumbs.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterializeModule
  ],
  exports: [
    BreadcrumbsComponent
  ],
  declarations: [BreadcrumbsComponent],
  providers: [
    BreadcrumbsService
  ]
})
export class BreadcrumbsModule { }
