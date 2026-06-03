import { Component,signal } from '@angular/core';

@Component({
  selector: 'app-updates',
  imports: [],
  templateUrl: './updates.html',
  styleUrl: './updates.css',
})
export class Updates {
  status = signal('published');

  friuts = signal(['apple','banana']);
  moreFriuts = signal(['grapes','orange']);

  baseUser = signal({ name:'john',age:25});
  infoUser = signal({ city:'hyderabad',country:'india'});

  numbers = signal([1,2,3]);

  sum(...values:number[]){
    return values.reduce((a,b)=>a+b,0);
  }
}
