import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-strength-bar',
  templateUrl: './strength-bar.component.html',
  styleUrls: ['./strength-bar.component.scss']
})
export class StrengthBarComponent implements OnInit {

  strength: number = 0;

  letters = new RegExp('([a-z])*');
  lower = new RegExp('[a-z]');
  upeer = new RegExp('[A-Z]')
  numbers = new RegExp('[0-9]');
  simbols = new RegExp('[!"#$%&\'()*+,\-./:;<=>?@[\\\]^_`{|}~]');

  @Input() controller: AbstractControl | null = null;

  @Output() shareStrength = new EventEmitter<number>();

  private readonly COLORS = {
    default: 'black',
    empty: 'grey',
    error: 'red',
    tooWeak: 'red',
    weak: 'orange',
    moderate: 'yellow',
    strong: 'green',
    veryStrong: '#86DB8A',
    warning: 'orange',
    correct: 'green',
  };

  private readonly OPTIONS = {
    empty: {
      message: '',
      color: this.COLORS.empty,
      styles: [this.COLORS.empty, this.COLORS.empty, this.COLORS.empty],
    },
    minLength: {
      message: 'Introduce al menos 6 caracteres',
      color: this.COLORS.error,
      styles: [this.COLORS.error, this.COLORS.empty, this.COLORS.empty],
    },
    tooWeak: {
      message: 'Muy débil',
      color: this.COLORS.tooWeak,
      styles: [this.COLORS.tooWeak, this.COLORS.empty, this.COLORS.empty],
    },
    weak: {
      message: 'Débil',
      color: this.COLORS.weak,
      styles: [this.COLORS.weak, this.COLORS.empty, this.COLORS.empty],
    },
    moderate:{
      message: 'Moderada',
      color: this.COLORS.moderate,
      styles: [this.COLORS.moderate, this.COLORS.moderate, this.COLORS.empty],
    },
    strong:{
      message: 'Fuerte',
      color: this.COLORS.strong,
      styles: [this.COLORS.strong, this.COLORS.strong, this.COLORS.strong],
    },
    veryStrong:{
      message: 'Muy fuerte',
      color: this.COLORS.veryStrong,
      styles: [this.COLORS.veryStrong, this.COLORS.veryStrong, this.COLORS.veryStrong],
    }
  };

  message: string = this.OPTIONS.empty.message;
  styles: string[] = this.OPTIONS.empty.styles;
  color: string = this.OPTIONS.empty.color;

  constructor() {}

  ngOnInit(): void {
    if (!!this.controller) {
      this.controller.valueChanges.subscribe((password: string) => {
        if (!password || password.length === 0) {
          this.color = this.OPTIONS.empty.color;
          this.message = this.OPTIONS.empty.message;
          this.styles = this.OPTIONS.empty.styles;
        } else if (password.length < 6) {
          this.color = this.OPTIONS.minLength.color;
          this.message = this.OPTIONS.minLength.message;
          this.styles = this.OPTIONS.minLength.styles;
        }
        const passValue = this.checkPass(password);
        if(1 <= passValue && 2 >= passValue){
          this.color = this.OPTIONS.tooWeak.color;
          this.message = this.OPTIONS.tooWeak.message;
          this.styles = this.OPTIONS.tooWeak.styles;
        }else if(3 <= passValue && 4 >= passValue){
          this.color = this.OPTIONS.weak.color;
          this.message = this.OPTIONS.weak.message;
          this.styles = this.OPTIONS.weak.styles;
        }else if(5 <= passValue && 7 >= passValue){
          this.color = this.OPTIONS.moderate.color;
          this.message = this.OPTIONS.moderate.message;
          this.styles = this.OPTIONS.moderate.styles;
        }else if(8 <= passValue && 9 >= passValue){
          this.color = this.OPTIONS.strong.color;
          this.message = this.OPTIONS.strong.message;
          this.styles = this.OPTIONS.strong.styles;
        }else if(9 <= passValue && 10 >= passValue){
          this.color = this.OPTIONS.veryStrong.color;
          this.message = this.OPTIONS.veryStrong.message;
          this.styles = this.OPTIONS.veryStrong.styles;
        }
      });
    }
  }

  checkPass(password: string): number{
    let strength = 0;
    let passLength = password.length;
    if(passLength >= 0 && passLength <= 6){

    }else if(passLength >= 7 && passLength <= 8){
      strength++;
    }else if(passLength >= 9 && passLength <= 12){
      strength = strength + 2;
    }else if(passLength > 12){
      strength = strength + 3;
    }

    if(password.match(this.letters)){
      strength++;
    }

    if(password.match(this.numbers)){
      strength++;
    }

    if(password.match(this.lower) && password.match(this.upeer)){
      strength = strength + 2;
    }

    if(password.match(this.simbols)){
      strength = strength + 2;
    }
    console.log(strength)

    if(strength === 9){
      strength++;
    }
    this.strength = strength;
    localStorage.setItem('strength', '' + this.strength);
    return strength;
  }

  getBackground(color: string) {
    return { 'background-color': color };
  }

  share(){
    this.shareStrength.emit(this.strength);
  }

}
