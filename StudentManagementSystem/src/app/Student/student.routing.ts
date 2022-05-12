import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './Student.component';
import { StudentcoursesComponent } from './studentcourses/studentcourses.component';

const routes: Routes = [
  {
    path: '',
    component: StudentComponent
},
{
  path: 'studentcourses',
  component: StudentcoursesComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutes { }
