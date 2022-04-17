import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { STUDENT_ERRORS } from '../../core/utils/student.errors';
import { COUNTRIES } from "src/app/core/data/countries";
import { PROVINCES } from 'src/app/core/data/provinces';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/models/student.model';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly STUDENT_ERRORS = STUDENT_ERRORS;

  readonly COUNTRIES = COUNTRIES;
  readonly PROVINCES = PROVINCES;

  id = 0;

  signStudent: FormGroup;

  students: Student[] = [];

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private studentService: StudentService
    ) {
      this.students = this.studentService.students$;
      this.signStudent = this.fb.group({
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
          ]
        ],
        mobile: [
          null,
          [
            Validators.required,
          ]
        ],
        secondMobile: [
          null
        ],
        country: [
          null,
          [
            Validators.required
          ]
        ],
        province: [
          null,
          [
            Validators.required
          ]
        ],
        cp: [
          null,
          [
            Validators.required,
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
        password: [
          null,
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ],
        repeatPassword: [
          null,
          [
            Validators.required,
            Validators.minLength(6)
          ]
        ]
      })
    }

  ngOnInit(): void {
  }

  submitForm(){
    if (this.signStudent.invalid) {
      return;
    }
    if(this.signStudent.get('password')?.value === this.signStudent.get('repeatPassword')?.value){
      let hashPass = CryptoJS.SHA3(this.signStudent.get('password')?.value);
      this.signStudent.controls['password'].setValue(hashPass);
      localStorage.setItem(this.takeLastId() , JSON.stringify(this.signStudent?.value))
      location.href = '/list';
    }else{
      alert('Las contraseñas no coinciden')
    }
  }

  takeLastId(): string{
    return this.studentService.takeLastId();
  }

  get countrySelected(){
    return this.signStudent.get("country");
  }

}
