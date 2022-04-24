import { MatDialogModule } from '@angular/material/dialog';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import { MatTableModule } from '@angular/material/table'

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { ModifyStudentComponent } from './components/modify-student/modify-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { MatSelectModule } from '@angular/material/select';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { StrengthBarComponent } from './components/strength-bar/strength-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModifyStudentComponent,
    ListStudentComponent,
    ChangePasswordComponent,
    StrengthBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatListModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
