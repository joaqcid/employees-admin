import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-employees-summary',
  templateUrl: './employees-summary.component.html',
  styleUrls: ['./employees-summary.component.scss']
})
export class EmployeesSummaryComponent implements OnInit {

  total$: Observable<number>;
  drivers$: Observable<number>;
  rosario$: Observable<number>;

  constructor(
    private employees: EmployeesService
  ) { }

  ngOnInit() {
    this.total$ = this.employees.totalEmployees$;
    this.drivers$ = this.employees.totalDrivers$;
    this.rosario$ = this.employees.totalRosarioEmployees$;
  }

}