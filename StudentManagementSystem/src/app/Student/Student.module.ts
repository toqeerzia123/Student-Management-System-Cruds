import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './Student.component';
import { StudentRoutes } from './student.routing';
import { StudentcoursesComponent } from './studentcourses/studentcourses.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutes,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [StudentComponent,StudentcoursesComponent]
})
export class StudentModule { }
