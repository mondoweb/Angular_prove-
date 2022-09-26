import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  azienda: string ='store web'

  title = 'miaprima-app';

  obj = [ { 'uno': 1 } , {'due' : 2}]
}
