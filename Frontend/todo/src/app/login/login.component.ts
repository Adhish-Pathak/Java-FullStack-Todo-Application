import { Component } from '@angular/core';
import { Router } from '@angular/router';
 import { BasicAuthenticationService } from '../service/basic-authentication.service';
 import {HardcodedAuthenticationService } from '../service/HardcodedAuthenticationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username = 'Adhish'
  password = ''
  errorMessage = "invalid credentials"
  invalidLogin = false

    constructor(private router:Router,
       private hardcodedAuthenticationService: HardcodedAuthenticationService,
       private basicAuthenticationService: BasicAuthenticationService
      ){}

   handleJWTAuthLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log("Login success:",data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }
    

       handleBasicAuthLogin(){
      // console.log(this.username);
     // if(this.username === "Adhish" && this.password === 'root'){
        this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false      
          },
          error => {
            console.log(error)
            this.invalidLogin = true
          }
        )
  }

      handleLogin(){
        // console.log(this.username);
      // if(this.username === "Adhish" && this.password === 'root'){
       if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      //Redirect to Welcome Page
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }
   
}
