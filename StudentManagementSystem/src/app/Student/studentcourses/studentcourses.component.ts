import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/models/course';
import { Student } from 'src/models/student';
import { Studentcourses } from 'src/models/studentcourses';
import { CourseService } from 'src/services/course.service';
import { StudentService } from 'src/services/student.service';
import { StudentcourseService } from 'src/services/studentcourse.service';

@Component({
  selector: 'app-studentcourses',
  templateUrl: './studentcourses.component.html',
  styleUrls: ['./studentcourses.component.css']
})
export class StudentcoursesComponent implements OnInit {

  courses: Course[] = [];
  Students: Student[] = [];
  studentcourses: any[] = [];
  Form!: FormGroup;;
  model = new Studentcourses;
  constructor(private modalService: NgbModal, private _courseservice: CourseService, private _service: StudentcourseService, private _studentservice: StudentService) { }
  ngOnInit() {
    this._fetchData();
    this._fetchStudents();
    this._fetchCourses();

  }
  private _fetchData() {
    this._service.GetAll().subscribe((next: any) => {
      debugger;
      this.studentcourses = next.data;
    }, error => {
      console.log(error);
    });
  }
  private _fetchStudents() {
    this._studentservice.GetAll().subscribe((next: any) => {
      this.Students = next.data;
    }, error => {
      console.log(error);
    });
  }
  private _fetchCourses() {
    this._courseservice.GetAll().subscribe((next: any) => {
      debugger;
      this.courses = next.data;
    }, error => {
      console.log(error);
    });
  }
  add(Addcontent: any) {
    this.Form = new FormGroup({
      id: new FormControl(this.model.id),
      studentId: new FormControl(this.model.studentId),
      createdDate: new FormControl(this.model.createdDate),
      isActive: new FormControl(this.model.isActive),
      courseId: new FormControl(this.model.courseId),
      modifiedDate: new FormControl(this.model.modifiedDate),
    });
    this.modalService.open(Addcontent, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }
  Viewupdate(Addcontent: any, date: Studentcourses) {
    this.Form = new FormGroup({
      id: new FormControl(date.id),
      studentId: new FormControl(date.studentId),
      createdDate: new FormControl(date.createdDate),
      isActive: new FormControl(date.isActive),
      courseId: new FormControl(date.courseId),
      modifiedDate: new FormControl(date.modifiedDate),
    });
    this.modalService.open(Addcontent, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }
  updatechanges() {
    this._service.Update(this.Form.value).subscribe((next: any) => {
      this.Form.reset();
      this.modalService.dismissAll();
      this._fetchData();
    },
      error => {
      }
    )
  }
  submit() {
    debugger;
    this._service.Add(this.Form.value).subscribe((next: any) => {
      this.Form.reset();
      this.modalService.dismissAll();
      this._fetchData();
    },
      error => {
      }
    )
  }
  remove(data: Studentcourses) {

    this._service.Remove(data).subscribe((next: any) => {
      this._fetchData();
    },
      error => {
      }
    )
  }

}
