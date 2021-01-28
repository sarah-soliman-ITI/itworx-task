import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoursesComponent } from './components/courses/courses.component';
import { TokenInterceptor } from './services/token.interceptor';
import { StudentsComponent } from './components/students/students.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { RouterModule, Routes, CanActivate, PreloadAllModules } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CourseAddComponent } from './components/course-add/course-add.component';
import { CourseService } from './components/courses/course.service';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';




const appRoutes: Routes = [
  {
    path: '',
    component: CoursesComponent,
    data: { title: 'Courses' }
  },
  {
    path: 'students',
    component: StudentsComponent,
    data: { title: 'students' }
  },
  {
    path: 'profile/:studentId',
    component: MyProfileComponent,
    data: { title: 'profile' }
  }
  ,
  {
    path: 'course-add',
    component: CourseAddComponent,
    data: { title: 'course-add' }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    StudentsComponent,
    MyProfileComponent,
    CarouselComponent,
    CourseAddComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    ReactiveFormsModule

  ],
  providers: [ CourseService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
