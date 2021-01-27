import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;
  coursesListBind =[];
  searchText;

  constructor(private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("assets/lists/courses.json").subscribe(data =>{
      console.log(data);
      this.courses = data;
      // var coursesList = this.courses.filter(x => x.Courses != null || 
      //   x.Courses != 0).map(x => x.Courses);
      //   this.coursesListBind = coursesList;

    })

  //   "CourseId": 123,
  //   "CourseName": "Course 1",
  //   "CoursePrice": 123.5,
  //   "AvailableSeats": 25,
  //   "CourseImg": "https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/6772890/600/400/m2/fpnw/wm0/9-.jpg?1564910091&s=cae782a267bc92f8a563993cb79de957",
	// "courseLevel":"Beginner",
	// "CourseDuration":40,
	// "CourseCategory":"IT & Software"
   
  
  }

}
