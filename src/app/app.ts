import { Component, signal } from '@angular/core';
import { SignalForm } from './signal-form/signal-form';

@Component({
  selector: 'app-root',
  imports: [SignalForm],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Angular21-features');
}
