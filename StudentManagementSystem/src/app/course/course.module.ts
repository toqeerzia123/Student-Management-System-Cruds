import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { CourseRoutes } from './course.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    CourseRoutes,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [CourseComponent]
})
export class CourseModule { }
