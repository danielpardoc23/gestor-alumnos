import { StudentService } from './../../core/services/student.service';
import { Component, Input, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student.model';
import { COUNTRIES } from "src/app/core/data/countries";
import { PROVINCES } from 'src/app/core/data/provinces';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})

export class ListStudentComponent implements OnInit {

  readonly COUNTRIES = COUNTRIES;
  readonly PROVINCES = PROVINCES;

  @Input()
  students: Student[] = [];

  displayedColumns: string[] = [ 'ID', 'Nombre', 'Apellido', 'Email', 'Nickname', 'DNI', 'Modificar', 'Eliminar' ];

  constructor(
    private studentService: StudentService
  ) {
    this.students = this.studentService.students$;
  }

  ngOnInit(): void {

  }

  deleteStudent(student: Student){
    if(!!student){
      this.studentService.deleteStudent(student);
      window.location.reload();
    }
  }

}
