import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentLocalStorageService {

  students: Student[] = [];

  constructor() { }

  getStudents(): Student[]{
    const numStudents = localStorage.length;
    for(let i = 0; i < numStudents; i++){
      let cod = i + '';
      let obj = localStorage.getItem(cod);
      if(!!obj && obj.length > 0){
        let stu = JSON.parse(obj);
        this.students.push(stu);
        stu.id = cod;
      }
    }
    return this.students?.map(s => new Student(s.id, s.name, s.lastname1, s.email, s.dni, s.mobile,
                            s.country, s.province, s.cp, s.location, s.nickname, s.password, s.lastname2, s.secondMobile));
  }

  deleteStudent(student: Student){
    if(!!student){
      localStorage.removeItem(student.id);
    }
  }

  takeLastId(){
    if(this.students.length === 0){
      return '0';
    }else{
      let last = this.students[this.students.length - 1].id;
      console.log(last);
      console.log(typeof(last))
      let result = parseInt(last, 10);
      result = result + 1;
      console.log(result);
      console.log(typeof(result))
      return result.toString();
    }
  }

}
