import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Student } from 'src/models/student';
import { StudentService } from 'src/services/student.service';

@Component({
  selector: 'app-Student',
  templateUrl: './Student.component.html',
  styleUrls: ['./Student.component.css']
})
export class StudentComponent implements OnInit {
  Students: Student[] = [];
  Form!: FormGroup;;
  model = new Student;
  constructor(private modalService: NgbModal, private _service: StudentService,) { }
  ngOnInit() {
    this._fetchData();
  }
  private _fetchData() {
    this._service.GetAll().subscribe((next: any) => {
      this.Students = next.data;
    }, error => {
      console.log(error);
    });
  }
  add(Addcontent: any) {
    this.Form = new FormGroup({
      id: new FormControl(this.model.id),
      student_Name: new FormControl(this.model.student_Name),
      createdDate: new FormControl(this.model.createdDate),
      isActive: new FormControl(this.model.isActive),
      fatherName: new FormControl(this.model.fatherName),
      phoneNo: new FormControl(this.model.phoneNo),
      className: new FormControl(this.model.className),
      modifiedDate: new FormControl(this.model.modifiedDate),
    });
    this.modalService.open(Addcontent, { size: 'lg', windowClass: 'modal-holder', centered: true });
  }

  Viewupdate(Addcontent: any, date: Student) {
    this.Form = new FormGroup({
      id: new FormControl(date.id),
      student_Name: new FormControl(date.student_Name),
      createdDate: new FormControl(date.createdDate),
      isActive: new FormControl(date.isActive),
      fatherName: new FormControl(date.fatherName),
      phoneNo: new FormControl(date.phoneNo),
      className: new FormControl(date.className),
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
  remove(data: Student) {
    this._service.Remove(data).subscribe((next: any) => {
      this._fetchData();
    },
      error => {
      }
    )
  }

}
