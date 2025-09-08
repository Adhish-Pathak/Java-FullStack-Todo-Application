// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { map } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class BasicAuthenticationService {

//   constructor(
//     private http: HttpClient
//   ) { }

//   authenticate(username: string, password: string){
//     console.log('before ' + this.isUserLoggedIn());
//      if(username === "Adhish" && password === 'root'){
//       sessionStorage.setItem('authenticatedUser', username);
//       console.log('after ' + this.isUserLoggedIn());
//       return true;
//      }
//       return false;
//      }
//      executeAuthenticationService(username:string, password:string){
//         //  let basicAuthHeaderString = 'Basic' + window.btoa(username + ':' + password);
//           let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password); 

//          let headers = new HttpHeaders({
//            Authorization : basicAuthHeaderString
//          }
//          );
//          return this.http.get<AuthenticationBean>('http://localhost:8080/basicauth',{headers}).pipe(
//           map(
//             data =>{
//               sessionStorage.setItem('authenticatedUser', username);
//               return data;
//             }
//           )
//          )
//        }

//      isUserLoggedIn(){
//       let user= sessionStorage.getItem('authenticatedUser')
//       return !(user === null);
//      }

//      logout(){
//       sessionStorage.removeItem('authenticatedUser')
//      }

//         getAuthenticatedToken() {
//       return sessionStorage.getItem('token');
//     }

    
//     getAuthenticatedUser() {
//       return sessionStorage.getItem('authenticatedUser');
//     }
//   }

//   export class AuthenticationBean{
//     constructor(public message:string){

//     }
//   }
