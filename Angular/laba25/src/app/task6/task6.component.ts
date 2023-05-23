import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  name: string = 'Іван';
  surname: string = 'Іванів';
  age: number = 25;

  changeName() {
    this.name = 'Петро';
  }

  changeSurname() {
    this.surname = 'Петренко';
  }

  changeAge() {
    this.age = 30;
  }
}

