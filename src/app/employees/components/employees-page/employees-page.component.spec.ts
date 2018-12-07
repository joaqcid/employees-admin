import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesPageComponent } from './employees-page.component';

describe('EmployeesPageComponent', () => {
  let component: EmployeesPageComponent;
  let fixture: ComponentFixture<EmployeesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
