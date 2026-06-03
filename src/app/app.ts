import { Component, signal } from '@angular/core';
import { Updates } from './updates/updates';

@Component({
  selector: 'app-root',
  imports:[Updates],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Angular21-features');
}
