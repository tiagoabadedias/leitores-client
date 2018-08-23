import { DashboardService } from './dashboard.service';
import { MzCardModule, MzIconModule } from 'ng2-materialize';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MzCardModule,
    RouterModule,
    MzIconModule,
  ],
  exports: [
    DashboardComponent
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
    DashboardService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class DashboardModule { }
