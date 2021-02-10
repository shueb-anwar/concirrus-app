import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
	public apiUrl: string = "../data/EmployeeData.json";
	public subject = new Subject<any>();

	constructor( private http: HttpClient ) { }

  	public getEmployeeList(): Observable<Employee[]> {
  		return this.http.get<Employee[]>(this.apiUrl);
	}
}
