import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;
  coursesListBind = [];
  searchText;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.httpClient.get("assets/lists/courses.json").subscribe(data => {
      console.log(data);
      this.courses = data;
    })
  }
  getCoursesDurLessThanTwo(event) {
    console.log(event);
    if (event == true) {
      var coursesList = this.courses.filter(x => x.CourseDuration < 2);
      console.log(coursesList);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }
  }

  getCoursesFromTwo(event) {
    if (event == true) {
      var coursesList = this.courses.filter(x => x.CourseDuration > 2 && x.CourseDuration < 10);
      console.log(coursesList);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }
  }

  getCoursesDurMoreThanTwo(event) {
    if (event == true) {
      var coursesList = this.courses.filter(x => x.CourseDuration > 10);
      console.log(coursesList);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }

  }

  getCoursesDevCategwo(event) {
    if (event == true) {
      var coursesList = this.courses.filter(x => x.CourseCategory == "Development");
      console.log(coursesList);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }
  }

  getCoursesFin(event) {
    if (event == true) {
      var coursesList = this.courses.filter(x => x.CourseCategory == "Finance & Accounting");
      console.log(coursesList);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }
  }

  getCoursesIT(event) {
    if (event == true) {
      var coursesList = this.courses.filter(x => x.CourseCategory == "IT & Software");
      console.log(coursesList);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }
  }


}
