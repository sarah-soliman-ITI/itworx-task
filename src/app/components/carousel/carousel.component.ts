import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  course_list = [
    {
      course:' course 1',
      courseStartDate: new Date('2019/05/20'),
      courseEndingDate: new Date('2019/05/24')
    },
     {
      course:' course 2',
      courseStartDate: new Date('2019/07/28'),
      courseEndingDate: new Date('2019/07/30')
    },
     {
      course:' course 3',
      courseStartDate: new Date('2020/05/20'),
      courseEndingDate: new Date('2020/05/24')
    },
     {
      course:' course 4',
      courseStartDate: new Date('2018/05/20'),
      courseEndingDate: new Date('2018/05/24')
    },
    {
      course:' course 5',
      courseStartDate: new Date('2017/07/10'),
      courseEndingDate: new Date('2017/08/14')
    },
    {
      course:' course 6',
      courseStartDate: new Date(),
      courseEndingDate: new Date()
    },
    {
      course:' course 7',
      courseStartDate: new Date(),
      courseEndingDate: new Date()
    },
  ]

  current_courses =  this.course_list.filter( course => (course.courseStartDate >= new Date() && (course.courseEndingDate <= new Date())))
  constructor() {
  }

  ngOnInit() {
  }

}