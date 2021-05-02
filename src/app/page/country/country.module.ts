import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';

import { CountryRoutingModule } from './country-routing.module';
import { CountryComponent } from './country.component';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { DynamicDialogModule } from 'primeng/dynamicdialog';

@NgModule({
  imports: [
    CommonModule,
    CountryRoutingModule,
    DialogModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    TooltipModule,
    DynamicDialogModule,
  ],
  declarations: [
    CountryComponent,
  ],
})
export class CountryModule { }
