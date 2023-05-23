import { Component } from '@angular/core';

@Component({
  selector: 'app-task5',
  templateUrl: './task5.component.html',
  styleUrls: ['./task5.component.css']
})
export class Task5Component {
  languages = ['html', 'css', 'js', 'php'];

  addPlusSign(): void {
    for (let i = 0; i < this.languages.length; i++) {
      if (this.languages[i].indexOf('+') === -1) {
        this.languages[i] += '+';
        break;
      }
    }
  }
}

