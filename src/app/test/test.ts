import { Component, OnInit } from '@angular/core';
import { User } from '../services/user';

@Component({
  selector: 'app-test',
  imports: [],
  templateUrl: './test.html',
  styleUrl: './test.css',
})
export class Test implements OnInit{

  constructor(private user:User){}
  userList:any[] =[];

  ngOnInit(): void {
    this.getUserData();
  }
  
  getUserData(){
    this.user.getData().subscribe((res:any)=>{
      this.userList = res;
      console.log(this.userList);
    })
  }

}
