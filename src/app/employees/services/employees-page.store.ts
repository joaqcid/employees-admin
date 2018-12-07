import { EmployeesPage } from '../states/employees-page';
import { StoreService } from 'src/app/core/services/store.service';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class EmployeesPageStore extends StoreService<EmployeesPage> {
   protected store: string = 'employees-page';

   constructor() {
       super({
           loading: true,
           employees: [],           
       })
   }
}
