import { Component, signal } from '@angular/core';
import { Apply } from './apply/apply';

@Component({
  selector: 'app-root',
  imports:[Apply],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Angular21-features');
}
