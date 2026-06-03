import { Component, signal } from '@angular/core';
import { Function } from './function/function';

@Component({
  selector: 'app-root',
  imports:[Function],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Angular21-features');
}
