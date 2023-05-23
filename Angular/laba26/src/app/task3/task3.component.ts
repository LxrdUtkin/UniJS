import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component {
  numbers = [1, 2, 3, 4, 5];

  reverseList() {
    this.numbers.reverse();
  }
}

