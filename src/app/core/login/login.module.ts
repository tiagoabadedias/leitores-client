import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { MzCardModule, MzIconModule, MzInputModule, MzButtonModule, MzProgressModule } from 'ng2-materialize';
import { UsuarioService } from './login.service';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MzCardModule,
    MzInputModule,
    MzIconModule,
    MzButtonModule,
    ReactiveFormsModule,
    MzProgressModule,
    MatButtonModule
  ],
  declarations: [LoginComponent],
  providers: [
    UsuarioService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LoginModule { }
