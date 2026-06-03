import { Component,signal} from '@angular/core';

@Component({
  selector: 'app-function',
  imports: [],
  templateUrl: './function.html',
  styleUrl: './function.css',
})
export class Function {
  members = signal([
    { name: 'ram', age: 25, active: true },
    { name: 'syam', age: 27, active: false },
    { name: 'raju', age: 30, active: true }
  ]);

  count = signal(0);
}
