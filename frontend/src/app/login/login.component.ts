import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username;
  userpwd;

  userList: Users[] = [
    {username: 'ali', password: 'asdf'},
    {username: 'zia', password: '1234'},
    {username: 'hammad', password: 'zxcv'},
  ];

  constructor(private _router: Router) { }

  ngOnInit(): void {
    let val = localStorage.getItem('user');
    console.log("hello from login ng" + val);
    if(val !== null){
      this._router.navigateByUrl('/todo')
    }else {
      this._router.navigateByUrl('');
    }
  }

  addUser(){
    if(this.username !== "" && this.userpwd !== ""){
      const newUser: Users = {
        username: this.username,
        password: this.userpwd
      }
      this.userList.push(newUser);
    }else {
      console.log("All fields should be filled!!")
    }
    this.username = "";
    this.userpwd = "";

    for(let item of this.userList){
      console.log(item);
    }
  }

  login(){
    if(this.username !== "" && this.userpwd !== ""){
        var result = this.userList.filter(item => item.username == this.username && item.password == this.userpwd);
        console.log(result)
        if(result.length != 0){
        console.log("welcome");
        localStorage.setItem('user', JSON.stringify(result));
        let isResult = localStorage.getItem('user');
        console.log(" Hello " + isResult);
        this._router.navigateByUrl('/todo');
        }else {
        console.log("You are not registered!!")
        }
    }else {
      console.log("All fields should be filled!!")
    }
    this.username = "";
    this.userpwd = "";
  }

}


