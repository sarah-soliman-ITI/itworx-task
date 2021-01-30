import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FilterService } from './filter.service';



@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: any;
  coursesListBind = [];
  searchText;
  dev = "Development";
  soft = "IT & Software";
  fin = "Finance & Accounting";
  Other = "Other";
  Beginner = "Beginner";
  Intermediate = "Intermediate";
  Expert = "Expert";
  AllLevels = "AllLevels";


  constructor(private httpClient: HttpClient, private filterService: FilterService) { }



  filteredCards;


  coursesList;
  onFilter(checkedValues) {
    if (checkedValues.length == 0) {
      this.getCourses();
    }
    if (checkedValues == "Other") {
      var coursesList = this.courses.filter(x => x.CourseCategory != this.dev && x.CourseCategory != this.soft
        && x.CourseCategory != this.fin);
      this.courses = coursesList;
    } else {

        debugger
      let filtered = this.courses
        // .filter(card => {
        //   return card
        .map(p => p.CourseCategory)
        .find(type => {
          return checkedValues.find(checkedType => checkedType === type);
        });

        if(checkedValues[0]=="Development" && checkedValues[1]=="IT & Software"){
          var coursesList = this.courses.filter(x => x.CourseCategory == this.dev && x.CourseCategory == this.soft
         );
         debugger
          this.courses = coursesList;
          
        }
      // checkedValues.filter(element => {
      //   this.coursesList = this.courses.filter(c => c.CourseCategory == (element))
      //   console.log(this.coursesList);


      // });
      // console.log(filtered);
      // this.courses = (this.coursesList);
    }

    // this.courses.filter(c=>c.CourseCategory == (checkedValues))
    //   var coursesList = this.courses.filter(x => x.CourseCategory == checkedValues);
    //   console.log(coursesList);
    //   this.courses = (coursesList);  
    //  for (let i = 0; i < checkedValues.length; i++) {
    //   var coursesList = this.courses.filter(x => x.CourseCategory == checkedValues);
    //   console.log(coursesList);
    //   this.courses = (coursesList);  
    //  }


  }



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


  filterCourses(event, option) {
    if (event == true && option != this.Other) {
      var coursesList = this.courses.filter(x => x.CourseCategory == option);
      console.log(coursesList);
      this.courses = coursesList;
    }
    else if (event == true && option == this.Other) {
      var coursesList = this.courses.filter(x => x.CourseCategory != this.dev && x.CourseCategory != this.soft
        && x.CourseCategory != this.fin);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }
  }


  filterCoursesLVL(event, option) {
    if (event == true && option != this.AllLevels) {
      var coursesList = this.courses.filter(x => x.courseLevel == option);
      console.log(coursesList);
      this.courses = coursesList;
    } else {
      this.getCourses();
    }
  }

}
