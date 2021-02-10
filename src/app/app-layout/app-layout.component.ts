import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import empoyees from "../data/EmployeeData.json";
import { Employee } from "../employee";

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
	public employeeList: Employee[] = empoyees.employees;
	public selected: string = "";

	constructor( public service: CommonService ) { }

	ngOnInit(): void {
		this.selected = this.employeeList[0].name;
		this.service.subject.next(this.employeeList[0]);
	}

	showDetail(employee: Employee) {
		this.service.subject.next(employee);
		this.selected = employee.name;
  	}

}
