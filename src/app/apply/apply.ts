import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form,FormField, required ,email, maxLength, minLength} from '@angular/forms/signals';


interface IloginData{
  email:string;
  password:string;
}


@Component({
  selector: 'app-apply',
  imports: [FormField,CommonModule],
  templateUrl: './apply.html',
  styleUrl: './apply.css',
})
export class Apply {

  isActive = signal<boolean>(true);
  isVisible = signal<boolean>(true);
  headingStyles = signal({
    color:'blue',
    fontSize:'20px',
    fontWeight:'bold',
    textAlign:'center',
    opacity:'0.5'
  })


  loginModal = signal<IloginData>({
  email:'',
  password:''
}); 

loginForm = form(this.loginModal,(schemaPath)=>{
  required(schemaPath.email,{message:'Email is required'}),
  email(schemaPath.email,{message:'Enter a valid email address'});
  required(schemaPath.password,{message:'Password is required'});
  minLength(schemaPath.password,5,{message:'Password must be at least 5 characters'});
  maxLength(schemaPath.password,10,{message:'Password is too long'});
});

onSubmit(event:Event){
  event.preventDefault();
  console.log('submitted');
  console.log(this.loginModal());
  // console.log(this.loginForm());
}

// setForm(){
//   this.loginModal.set({
//   email:'Veer@gmail.com',
//   password:'Veer123'
// });
// }

// resetForm(){
//   this.loginModal.set({
//   email:'',
//   password:''
// })
// }

// updateForm(){
//   this.loginForm.email().value.set('Veera@gmail.com')
//   this.loginForm.password().value.set('Veera1234')
// }

// updateEmailForm(newEmail:string){
//   this.loginModal.update(current=>({
//     ...current,
//     email:newEmail
//   }))
// }

}

