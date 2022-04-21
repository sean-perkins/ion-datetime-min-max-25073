import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  min = '2022-03-01';
  max = '2022-04-07';
  initialDate = '2022-04-05T10:00:00';
}
