import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  min = '2022-04-22';
  max = '2022-05-21';
  initialDate = '2022-04-22T10:00:00';
}
