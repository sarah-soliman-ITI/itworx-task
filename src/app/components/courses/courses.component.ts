import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import studentsData from './students.json';
import requestsData from './requests.json';



@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(studentsData);
    console.log(requestsData);
  }

}
