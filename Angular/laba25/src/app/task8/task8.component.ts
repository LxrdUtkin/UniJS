import { Component } from '@angular/core';

@Component({
  selector: 'app-task8',
  templateUrl: './task8.component.html',
  styleUrls: ['./task8.component.css']
})
export class Task8Component {
  languages = ['html', 'css', 'js', 'php'];

  addLanguage() {
    this.languages.push('sql');
  }
}

