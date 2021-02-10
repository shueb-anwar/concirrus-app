import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Employee } from "../employee";
import { ViewPorts } from '../viewports';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isMobile: boolean = false;
  public contentHeight: number = 0;
  
	public employee: Employee = {
    name: '',
    popularity: 0,
    biography: '',
    image: '',
    colleagues: [],
  };

	constructor(public service: CommonService, private viewport: ViewPorts) {
  		

  		this.service.subject.asObservable().subscribe((employee) => {
        console.log(employee)
      	this.employee = employee;
      });

      this.viewport.viewPortChange().subscribe((val) => {
        this.isMobile = val.isLtSMVP;

        this.contentHeight = window.innerHeight - 97;
      });
  	}

  	ngOnInit(): void {
  	
  	}
}
