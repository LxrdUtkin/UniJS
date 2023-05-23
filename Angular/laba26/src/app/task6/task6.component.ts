import { Component } from '@angular/core';

@Component({
  selector: 'app-task6',
  templateUrl: './task6.component.html',
  styleUrls: ['./task6.component.css']
})
export class Task6Component {
  users: string[] = ['Микола', 'Василь', 'Петро'];
  newUsers: string[] = ['Аня', 'Валя', 'Маша'];
  
  addUser(): void {
    if (this.newUsers.length > 0) {
      this.users.push(this.newUsers[0]);
      this.newUsers.shift();
    } else {
      this.users.sort();
    }
  }
}
