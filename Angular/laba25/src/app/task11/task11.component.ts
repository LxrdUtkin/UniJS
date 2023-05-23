import { Component } from '@angular/core';

@Component({
  selector: 'app-task11',
  templateUrl: './task11.component.html',
})
export class Task11Component {
  languages = ['html', 'css', 'js', 'php'];

  deleteLanguage(language: string): void {
    const index = this.languages.indexOf(language);
    if (index !== -1) {
      this.languages.splice(index, 1);
    }
  }
}
