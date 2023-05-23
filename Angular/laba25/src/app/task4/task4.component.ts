import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  workers = [
    { name: 'Микола', age: 30, salary: 400 },
    { name: 'Василь', age: 31, salary: 500 },
    { name: 'Петро', age: 32, salary: 600 },
  ];
}

