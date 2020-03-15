import { EmployeesService } from './../../services/employees.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
 selector: 'app-employees-form',
 templateUrl: './employees-form.component.html',
 styleUrls: ['./employees-form.component.scss']
})
export class EmployeesFormComponent implements OnInit {

 form: FormGroup = new FormGroup({
   name: new FormControl('', Validators.required),
   location: new FormControl('', Validators.required),
   hasDriverLicense: new FormControl(false)
 });

 locations = [
   'Rosario',
   'Buenos Aires',
   'Bariloche'
 ]

 status$: Observable<string>;

 constructor(
   private employees: EmployeesService
 ) { }

 ngOnInit() {
   this.status$ = this.employees.formStatus$;
 }

 isInvalid(name) {
   return this.form.controls[name].invalid && (this.form.controls[name].dirty || this.form.controls[name].touched)
 }

 async submit() {
   this.form.disable()
   await this.employees.create({ ...this.form.value })
   this.form.reset()
   this.form.enable()
 }

}
