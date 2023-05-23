import { Component } from '@angular/core';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
})
export class Task3Component {
  languages = ['html', 'css', 'js', 'php'];
  
  cities = Object.entries({
    Варшава: 'Польща',
    Вільнюс: 'Литва',
    Київ: 'Україна',
  });
}