import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  inputValue: string = '';
  title = 'Adventure-App';  // Add this line if 'title' should exist
}
