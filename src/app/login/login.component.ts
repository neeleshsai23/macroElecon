import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(values:Object){
    if(values["username"]=="admin@simc.com" && values["password"]=="admin"){
      localStorage.setItem("loginUser", values["username"]);
      localStorage.setItem('userType','admin');
      this.route.navigate(['/me/dashboard']);
    }
    else if(values["username"]=="tenant@simc.com" && values["password"]=="tenant"){
      localStorage.setItem("loginUser", values["username"]);
      localStorage.setItem('userType','customer');
      this.route.navigate(['/simc/dashboard']);
    }
    else{
      alert('Invalid Credentials');
    }

  }

}



