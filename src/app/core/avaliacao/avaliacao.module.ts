import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AvaliacaoComponent } from './avaliacao.component';
import { AvaliacaoService } from './avaliacao.service';
import { AvaliacaoListaComponent } from './avaliacao-lista/avaliacao-lista.component';
import {
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatCardModule,
  MatDialogModule,
  MatTableModule,
  MatAutocompleteModule,
  MatButtonToggleModule
} from '@angular/material';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';
import { MzSelectModule, MzModalModule, MzButtonModule } from 'ng2-materialize';
import { AvaliacaoAddComponent } from './avaliacao-add/avaliacao-add.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatButtonModule,
    RouterModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MzModalModule,
    MzButtonModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule,
    BreadcrumbsModule,
    MzSelectModule,
    MatButtonToggleModule
  ],
  declarations: [AvaliacaoComponent, AvaliacaoListaComponent, AvaliacaoAddComponent],
  providers: [
    AvaliacaoService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AvaliacaoModule { }
