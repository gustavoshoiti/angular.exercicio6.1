import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TInputComponent } from './t-input/t-input.component';
import { MaterialModule } from '../material/material.module';
import { TFormComponent } from './t-form/t-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TInputComponent,
    TFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    TInputComponent,
    TFormComponent
  ]
})
export class TComponentModule { }
