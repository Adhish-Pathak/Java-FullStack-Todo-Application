import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService, HelloWorldBean } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


  welcomeMessageFromService: string='';
  name = '';
  constructor(
    private route: ActivatedRoute,
   private service: WelcomeDataService
  ) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getWelcomeMessageWithParamater(){
    // console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      (response: HelloWorldBean) => this.handleSuccessfulResponse(response),
      (error) => this.handleErrorResponse(error)
    );
    // console.log("get welcome message");
  }

  handleSuccessfulResponse(response:HelloWorldBean){
    this.welcomeMessageFromService = response.message;
    // console.log(response);
    // console.log(response.message);
  }

  handleErrorResponse(error: any){
    this.welcomeMessageFromService = error.error.message
  }
}
