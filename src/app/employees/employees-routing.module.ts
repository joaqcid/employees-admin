import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesPageComponent } from './components/employees-page/employees-page.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
