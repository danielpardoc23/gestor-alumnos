import { StrengthBarComponent } from './../strength-bar/strength-bar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from 'src/app/core/services/student.service';
import { Student } from 'src/app/models/student.model';
import { GENERAL_ERRORS } from 'src/app/core/utils/general.errors';
import { STUDENT_ERRORS } from '../../core/utils/student.errors';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  @ViewChild(StrengthBarComponent) value!: number;

  passStrength: number = 0;

  student!: Student;

  id!: string;

  changePass: FormGroup;

  readonly GENERAL_ERRORS = GENERAL_ERRORS;
  readonly STUDENT_ERRORS = STUDENT_ERRORS;

  constructor(
    private rutaActiva: ActivatedRoute,
    private studentService: StudentService,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) {
    this.id = rutaActiva.snapshot.params['id'];
    this.student = this.getStudent();
    this.changePass = this.fb.group({
      name:[],
      lastname1:[],
      lastname2:[],
      email:[],
      dni:[],
      mobile:[],
      secondMobile:[],
      country:[],
      province:[],
      cp:[],
      location:[],
      nickname:[],
      password: [
        null,
        [
          Validators.required
        ]
      ],
      repeatPassword: [
        null,
        [
          Validators.required
        ]
      ]
    })
   }

  ngOnInit( ): void {
  }

  getStudent(): Student{
    return this.studentService.getStudent(this.id);
  }

  ngAfterViewInit(){
    this.passStrength = this.value.valueOf();
  }

  submitForm(){
    let passStrength = localStorage.getItem('strength');
    let question = confirm("¿Está seguro de que desea cambiar su contraseña");
    if(question){
      if (this.changePass.invalid) {
        return;
      }
      if(!!passStrength){
        if(+passStrength < 8){
          question = confirm("La contraseña introducida es débil. ¿Desea continuar?");
          if(question){
            if(this.changePass.get('password')?.value === this.changePass.get('repeatPassword')?.value){
              let hashPass = CryptoJS.SHA3(this.changePass.get('password')?.value);
              this.changePass.controls['name'].setValue(this.student.name);
              this.changePass.controls['lastname1'].setValue(this.student.lastname1);
              this.changePass.controls['lastname2'].setValue(this.student.lastname2);
              this.changePass.controls['email'].setValue(this.student.email);
              this.changePass.controls['dni'].setValue(this.student.dni);
              this.changePass.controls['mobile'].setValue(this.student.mobile);
              this.changePass.controls['secondMobile'].setValue(this.student.secondMobile);
              this.changePass.controls['country'].setValue(this.student.country);
              this.changePass.controls['province'].setValue(this.student.province);
              this.changePass.controls['cp'].setValue(this.student.cp);
              this.changePass.controls['nickname'].setValue(this.student.location);
              this.changePass.controls['password'].setValue(hashPass);
              this.changePass.controls['repeatPassword'].setValue(hashPass);
              location.href = '/list';
            }else{
              alert('Las contraseñas no coinciden')
            }
          }
        }else{
          if(this.changePass.get('password')?.value === this.changePass.get('repeatPassword')?.value){
            let hashPass = CryptoJS.SHA3(this.changePass.get('password')?.value);
            this.changePass.controls['name'].setValue(this.student.name);
            this.changePass.controls['lastname1'].setValue(this.student.lastname1);
            this.changePass.controls['lastname2'].setValue(this.student.lastname2);
            this.changePass.controls['email'].setValue(this.student.email);
            this.changePass.controls['dni'].setValue(this.student.dni);
            this.changePass.controls['mobile'].setValue(this.student.mobile);
            this.changePass.controls['secondMobile'].setValue(this.student.secondMobile);
            this.changePass.controls['country'].setValue(this.student.country);
            this.changePass.controls['province'].setValue(this.student.province);
            this.changePass.controls['cp'].setValue(this.student.cp);
            this.changePass.controls['nickname'].setValue(this.student.location);
            this.changePass.controls['password'].setValue(hashPass);
            this.changePass.controls['repeatPassword'].setValue(hashPass);
            location.href = '/list';
          }else{
            alert('Las contraseñas no coinciden')
          }
        }
      }
    }else{
      location.href = '/list';
    }
  }

  getStrength(strength: number){
    this.passStrength = strength;
  }

}
