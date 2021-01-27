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
    this.httpClient.get("assets/lists/requests.json").subscribe(data =>{
      console.log(data);
      this.courses = data;
      var coursesList = this.courses.filter(x => x.Courses != null || 
        x.Courses != 0).map(x => x.Courses);
        this.coursesListBind = coursesList;

    })
   
  
  }

}
