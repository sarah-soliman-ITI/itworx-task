import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any;
  courses: any;
  coursesListBind =[];
  searchText;


  constructor(private httpClient : HttpClient,private router: Router) { }

  ngOnInit(): void {
  //  this.students = studentsData;   
  this.httpClient.get("assets/lists/students.json").subscribe(data =>{
    console.log(data);
    this.students = data;
 
  })

  this.httpClient.get("assets/lists/requests.json").subscribe(data =>{
    console.log(data);
    this.courses = data;
    var coursesList = this.courses.filter(x => x.Courses != null || 
      x.Courses != 0).map(x => x.Courses);
      this.coursesListBind = coursesList;

  })
  
  }

  goToProfilePage(StudentId){
    this.router.navigate(['/profile/'+StudentId]);  }

}
