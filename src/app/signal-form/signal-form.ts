import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form,FormField, required ,email} from '@angular/forms/signals';

interface IloginData{
  email:string;
  password:string;
}

@Component({
  selector: 'app-signal-form',
  imports: [FormField,CommonModule],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {

loginModal = signal<IloginData>({
  email:'',
  password:''
}); 

loginForm = form(this.loginModal,(schemaPath)=>{
  required(schemaPath.email,{message:'Email is required'}),
  email(schemaPath.email,{message:'Enter a valid email address'});
  required(schemaPath.password,{message:'Password is required'});
});

onSubmit(event:Event){
  event.preventDefault();
  console.log('submitted');
  console.log(this.loginModal());
  // console.log(this.loginForm());
}


}
