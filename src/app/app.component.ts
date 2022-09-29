import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  names: string[] = ["Fred", "Julie", "Sam", "Olivia", "Adam", "Jennifer"];
  isHungry:boolean = true;

  currentDay:Date = new Date;
}
