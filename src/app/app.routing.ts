import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListStudentComponent  },
  { path: 'student/:id', component: ModifyStudentComponent },
  { path: 'change-pass/:id', component: ChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
