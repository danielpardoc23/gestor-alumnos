import { StudentLocalStorageService } from './student-local-storage.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private _students$: Student[] = [];

  student!: Student;

  constructor(
    private studentLocalStorage: StudentLocalStorageService
  ) {
    this._students$ = this.studentLocalStorage.getStudents();
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
