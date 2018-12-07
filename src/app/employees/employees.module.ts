import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeesPageComponent } from './components/employees-page/employees-page.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesFormComponent } from './components/employees-form/employees-form.component';

@NgModule({
  declarations: [EmployeesPageComponent, EmployeesListComponent, EmployeesFormComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeesModule { }
