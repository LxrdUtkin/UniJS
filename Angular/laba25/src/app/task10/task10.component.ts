import { Component } from '@angular/core';

@Component({
  selector: 'app-task10',
  templateUrl: './task10.component.html',
})
export class Task10Component {
  languages = ['html', 'css', 'js', 'php'];

  deleteLanguage(language: string): void {
    const index = this.languages.indexOf(language);
    if (index !== -1) {
      this.languages.splice(index, 1);
    }
  }
}

