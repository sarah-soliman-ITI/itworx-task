import { Component, OnInit } from '@angular/core';
import studentsData  from '../lists/students.json';
import requestsData from '../lists/requests.json';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[] = [];

  constructor() { }

  ngOnInit(): void {
   this.students = studentsData;    
  }

}
