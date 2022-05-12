import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Course } from 'src/models/course';
import { CourseService } from 'src/services/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] = [];
  Form!: FormGroup;;
  model = new Course;
  constructor(private modalService: NgbModal, private _service: CourseService,) { }
  ngOnInit() {
    this._fetchData();
  }
  private _fetchData() {
    this._service.GetAll().subscribe((next: any) => {
      this.courses = next.data;
    }, error => {
      console.log(error);
    });
  }
  add(Addcontent: any) {
    this.Form = new FormGroup({
      id: new FormControl(this.model.id),
      courseName: new FormControl(this.model.courseName),
      createdDate: new FormControl(this.model.createdDate),
      isActive: new FormControl(this.model.isActive),
      marsk: new FormControl(this.model.marsk),
      modifiedDate: new FormControl(this.model.modifiedDate),
    });
    this.modalService.open(Addcontent, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

  Viewupdate(Addcontent: any, date: Course) {
    this.Form = new FormGroup({
      id: new FormControl(date.id),
      courseName: new FormControl(date.courseName),
      createdDate: new FormControl(date.createdDate),
      isActive: new FormControl(date.isActive),
      marsk: new FormControl(date.marsk),
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
    this._service.Add(this.Form.value).subscribe((next: any) => {
      this.Form.reset();
      this.modalService.dismissAll();
      this._fetchData();
    },
      error => {
      }
    )
  }

  remove(data: Course) {
    this._service.Remove(data).subscribe((next: any) => {
      this._fetchData();
    },
      error => {
      }
    )
  }
}
