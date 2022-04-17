import { StudentLocalStorageService } from './student-local-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  letters = new RegExp('([a-z])*', 'i');
  lowerUpperCase = new RegExp('(([A-Z]+)([a-z])+)');
  numbers = new RegExp('([0-9]+)');
  simbols = new RegExp('[\W]');

  private _students$: Student[] = [];

  student!: Student;

  constructor(
    private studentLocalStorage: StudentLocalStorageService
  ) {
    this._students$ = this.studentLocalStorage.getStudents();
  }

  validatePassword(password: string): number{
    let count = 0;

    let passLength = password.length;
    if(passLength >= 0 && passLength <= 6){

    }else if(passLength >= 7 && passLength <= 8){
      count++;
    }else if(passLength >= 9 && passLength <= 12){
      count = count + 2;
    }else if(passLength > 12){
      count = count + 3;
    }

    if(password.match(this.letters)){
      count++;
    }

    if(password.match(this.lowerUpperCase)){
      count = count + 2;
    }

    if(password.match(this.numbers)){
      count++;
    }

    if(password.match(this.simbols)){
      count = count + 2;
    }

    if(count === 9){
      count++;
    }

    return count;
  }

  get students$(): Student[]{
    return this._students$;
  }

  set students$(students$: Student[]){
    this._students$ = students$;
  }

  getStudent(id: string): Student{
    for(let i = 0; i < this._students$.length; i++){
      if(id === this._students$[i].id){
        this.student =  this._students$[i];
      }
    }
    return this.student;
  }

  deleteStudent(student: Student){
    if(!!student){
      this.studentLocalStorage.deleteStudent(student);
    }
  }

  takeLastId(): string{
    return this.studentLocalStorage.takeLastId();
  }

}
