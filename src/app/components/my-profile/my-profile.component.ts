import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  students: any;
  courses: any;
  coursesListBind =[];
  studId;
  studDetails;
  courseDetails;

  constructor(private httpClient : HttpClient,private router: Router) { }

  ngOnInit(): void {

    this.studId = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);
  this.httpClient.get("assets/lists/students.json").subscribe(data =>{
    console.log(data);
    this.students = data;
    debugger;
    this.studDetails = this.students.filter(x => x.Id == this.studId);
  })

  this.httpClient.get("assets/lists/requests.json").subscribe(data =>{
    console.log(data);
    this.courses = data;
    var coursesList = this.courses.filter(x => x.Courses != null || 
      x.Courses != 0).map(x => x.Courses);
      this.coursesListBind = coursesList;
      for (let i = 0; i < this.coursesListBind.length; i++) {
        this.courseDetails = this.courses.filter(x => x.StudentId == this.studId);
      }
     
  })


 




  }

}
