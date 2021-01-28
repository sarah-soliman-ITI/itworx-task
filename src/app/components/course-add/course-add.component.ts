

import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CourseService } from '../courses/course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../courses/course-interface';


@Component({
  selector: 'course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.css']
})
export class CourseAddComponent implements OnInit  {

  courseForm: FormGroup;
  
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ){}
  
  ngOnInit(){
    this.courseForm = new FormGroup({
      CourseId:new FormControl(''),
      CourseName:new FormControl(''),
      CoursePrice: new FormControl(''),
      AvailableSeats:new FormControl(''),
      courseLevel: new FormControl(''),
      CourseDuration: new FormControl(''),
      CourseCategory: new FormControl('')
    })

  }

  resetForm(){
    console.log('reset',this.courseForm)
    this.courseForm.reset();
  }

  add(){
    if(this.courseForm.valid){
     console.log(this.courseForm.value);
      this.resetForm();
    }
      else {
     return;
    }
  }  
}
