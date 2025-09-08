import { Component, OnInit } from '@angular/core';
import {HardcodedAuthenticationService } from '../service/HardcodedAuthenticationService';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //isUerLoggedIn: boolean = false;
  constructor( public hardcodedAuthenticeService : HardcodedAuthenticationService){}

  ngOnInit(){

    //this.isUerLoggedIn = this.hardcodedAuthenticeService.isUserLoggedIn();

  }
}
