import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  viewProviders: [Title],
})
export class AppComponent {
  title = 'app';

  constructor(title: Title) {
    title.setTitle('Ben mansour hatem');

  }
}
