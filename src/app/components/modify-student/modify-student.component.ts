import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/models/student.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { StudentService } from 'src/app/core/services/student.service';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { STUDENT_ERRORS } from '../../core/utils/student.errors';
import { COUNTRIES } from "src/app/core/data/countries";
import { PROVINCES } from 'src/app/core/data/provinces';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modify-student',
  templateUrl: './modify-student.component.html',
  styleUrls: ['./modify-student.component.scss']
})
export class ModifyStudentComponent implements OnInit {

  student!: Student;

  id!: string;

  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly STUDENT_ERRORS = STUDENT_ERRORS;

  readonly COUNTRIES = COUNTRIES;
  readonly PROVINCES = PROVINCES;

  modifyStudent: FormGroup;

  constructor(
    private rutaActiva: ActivatedRoute,
    private studentService: StudentService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.id = rutaActiva.snapshot.params['id'];
    this.student = this.getStudent();
    this.modifyStudent = this.fb.group({
      name: [
        null,
        [
          Validators.required
        ]
      ],
      lastname1: [
        null,
        [
          Validators.required
        ]
      ],
      lastname2: [
        null,
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ],
      dni: [
        null,
        [
          Validators.required,
          //Falta validacion DNI válido
        ]
      ],
      mobile: [
        null,
        [
          Validators.required,
          //Falta validación teléfono móvil válido
        ]
      ],
      secondMobile: [
        null
      ],
      country: [
        null,
        [
          Validators.required
          //Tiene que ser un desplegable
        ]
      ],
      province: [
        null,
        [
          Validators.required
          //Si se selecciona España, desplegable de provincias
        ]
      ],
      cp: [
        null,
        [
          Validators.required,
          //Falta validación CP válido si se selecciona España --> comprobar 2 primeros dígitos
        ]
      ],
      location: [
        null,
        [
          Validators.required
        ]
      ],
      nickname: [
        null,
        [
          Validators.required
        ]
      ],
    })
  }

  ngOnInit(): void {
  }

  getStudent(): Student{
    return this.studentService.getStudent(this.id);
  }

  submitForm(){
    console.log(this.modifyStudent.value);
    if (this.modifyStudent.invalid) {
      return;
    }
    localStorage.setItem(this.id , JSON.stringify(this.modifyStudent?.value))
    location.href = '/list';
  }

  get countrySelected(){
    return this.modifyStudent.get("country");
  }

}
