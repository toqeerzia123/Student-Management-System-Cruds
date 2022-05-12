/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StudentcoursesComponent } from './studentcourses.component';

describe('StudentcoursesComponent', () => {
  let component: StudentcoursesComponent;
  let fixture: ComponentFixture<StudentcoursesComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
