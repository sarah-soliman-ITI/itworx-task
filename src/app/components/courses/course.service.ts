import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from './course-interface';


@Injectable()
export class CourseService {
  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();
  constructor(private http: HttpClient) {
  }
  
  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}


