import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import studentsData  from '../lists/students.json';
import requestsData from '../lists/requests.json';



@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.courses =[...requestsData];
    console.log(studentsData);
    console.log(requestsData);
  }

}
