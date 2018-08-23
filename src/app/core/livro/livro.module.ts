import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro.component';
import { LivroListaComponent } from './livro-lista/livro-lista.component';
import { LivroCadastroComponent } from './livro-cadastro/livro-cadastro.component';
import { LivroService } from './livro.service';
import { MzCardModule, MzInputModule, MzProgressModule, MzButtonModule, MzSelectModule, MzModalModule } from 'ng2-materialize';
import { MatCardModule, MatDialogModule, MatButtonModule, MatTableModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsModule } from '../../shared/components/breadcrumbs/breadcrumbs.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MzCardModule,
    MzInputModule,
    MzSelectModule,
    MzButtonModule,
    RouterModule,
    BreadcrumbsModule,
    MzModalModule,
    FormsModule,
    MatAutocompleteModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MzProgressModule,
    MatCardModule
  ],
  declarations: [LivroComponent, LivroListaComponent, LivroCadastroComponent],
  providers: [
    LivroService,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LivroModule { }
