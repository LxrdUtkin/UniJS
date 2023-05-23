import { Component } from '@angular/core';

@Component({
  selector: 'app-task7',
  templateUrl: './task7.component.html',
})
export class Task7Component {
  languages = ['html', 'css', 'js', 'php'];

  changeLanguage() {
    const index = this.languages.indexOf('php');
    if (index !== -1) {
      this.languages[index] = 'sql';
    }
  }
}
