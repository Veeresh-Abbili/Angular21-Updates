import { Component, signal } from '@angular/core';
import { Tailwind } from './tailwind/tailwind';

@Component({
  selector: 'app-root',
  imports:[Tailwind],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Angular21-features');
}
