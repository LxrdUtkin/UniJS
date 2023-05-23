import { Component } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component {

  langs = {
    name: 'Петро',
    surname: 'Петренко',
    age: '25',
  };
  fullName: string = `${this.langs.name} ${this.langs.surname}`;
  age: number = parseInt(this.langs.age);

}
