import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FilterService } from './filter.service';
import { FilterDurService } from './filterDur.service';
import { FilterLvlService } from './filterLvl.service';



@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  originalCoursesList: any;
  copiedCoursesList = [];
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
  coursesList =[];
  onFilter(checkedValues) {
    this.coursesList=[];    
    if (checkedValues.length == 0) {
      this.getCourses();
    }
    if (checkedValues == "Other") {
      var coursesList = this.originalCoursesList.filter(x => x.CourseCategory != this.dev && x.CourseCategory != this.soft
        && x.CourseCategory != this.fin);
      this.originalCoursesList = coursesList;
    } else {
      let filtered = this.originalCoursesList  
        .map(p => p.CourseCategory)
        .find(type => {
          return checkedValues.find(checkedType => checkedType === type);
        });
      checkedValues.filter(element => {
        let filteredItemsRes = this.originalCoursesList.filter(c => c.CourseCategory == (element));
        filteredItemsRes.forEach(element => {
          this.coursesList.push(element);
        });            
      });
      this.copiedCoursesList= this.coursesList;
    }
  }

  onFilterDur(checkedValues) {
    this.coursesList=[];    
    if (checkedValues.length == 0) {
      this.getCourses();
    }
    
      let filtered = this.originalCoursesList  
        .map(p => p.CourseCategory)
        .find(type => {
          return checkedValues.find(checkedType => checkedType === type);
        });
      checkedValues.filter(element => {

        let filteredItemsRes = this.originalCoursesList.filter(c => c.CourseCategory == (element));
        filteredItemsRes.forEach(element => {
          this.coursesList.push(element);
        });            
      });
      this.copiedCoursesList= this.coursesList;
   
  }

  onFilterLvl(checkedValues) {
    this.coursesList=[];    
    if (checkedValues.length == 0) {
      this.getCourses();
    }
    
      let filtered = this.originalCoursesList  
        .map(p => p.courseLevel)
        .find(type => {
          return checkedValues.find(checkedType => checkedType === type);
        });
      checkedValues.filter(element => {
        debugger
        let filteredItemsRes = this.originalCoursesList.filter(c => c.courseLevel == (element));
        filteredItemsRes.forEach(element => {
          this.coursesList.push(element);
        });            
      });
      debugger
      this.copiedCoursesList= this.coursesList;
   
  }


  ngOnInit(): void {
    let additionalCourses = localStorage.getItem("addition");
    if(additionalCourses !=null){
      this.httpClient.get("assets/lists/courses.json").subscribe(data => {
        console.log(data);
        this.originalCoursesList = data;
        debugger
        let parsed = JSON.parse(additionalCourses);
        this.originalCoursesList.push(parsed);
        this.originalCoursesList = this.originalCoursesList;
        console.log(this.originalCoursesList)
      });
    }
    this.getCourses();

  }

  getCourses() {
    this.httpClient.get("assets/lists/courses.json").subscribe((data: any) => {
      console.log(data);
      this.originalCoursesList = [...data];
      this.copiedCoursesList = [...data];

    })
  }
  getCoursesDurLessThanTwo(event) {
    console.log(event);
    if (event == true) {
      var coursesList = this.originalCoursesList.filter(x => x.CourseDuration < 2);
      console.log(coursesList);
      this.originalCoursesList = coursesList;
      this.copiedCoursesList = coursesList;
    } else {
      this.getCourses();
    }
  }

  getCoursesFromTwo(event) {
    if (event == true) {
      var coursesList = this.originalCoursesList.filter(x => x.CourseDuration > 2 && x.CourseDuration < 10);
      console.log(coursesList);
      this.originalCoursesList = coursesList;
      this.copiedCoursesList = coursesList;
    } else {
      this.getCourses();
    }
  }

  getCoursesDurMoreThanTwo(event) {
    if (event == true) {
      var coursesList = this.originalCoursesList.filter(x => x.CourseDuration > 10);
      console.log(coursesList);
      this.originalCoursesList = coursesList;
      this.copiedCoursesList = coursesList;
    } else {
      this.getCourses();
    }

  }

}
