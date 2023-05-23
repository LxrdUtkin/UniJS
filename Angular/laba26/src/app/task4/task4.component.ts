import { Component } from '@angular/core';

@Component({
  selector: 'app-task4',
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.css']
})
export class Task4Component {
  nums = [4, 1, 3, 5, 2];

  sort() {
    this.nums.sort();
  }
}

