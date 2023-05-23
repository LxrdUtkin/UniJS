import { Component } from '@angular/core';

@Component({
  selector: 'app-task9',
  templateUrl: './task9.component.html',
})
export class Task9Component {
  languages = ['html', 'css', 'js', 'php'];

  addLanguage() {
    this.languages.unshift('sql');
  }
}

