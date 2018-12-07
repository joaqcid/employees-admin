import { Employee } from '../../models/employee';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  loading$: Observable<boolean>;
  employees$: Observable<Employee[]>;
  noResults$: Observable<boolean>;

  constructor(
    private employees: EmployeesService
  ) { }

  ngOnInit() {
    this.loading$ = this.employees.loading$;
    this.noResults$ = this.employees.noResults$;
    this.employees$ = this.employees.employees$;
  }

  delete(employee: Employee) {
    this.employees.delete(employee.id);
  }

}
