import { Component, OnInit,ViewContainerRef } from '@angular/core';

import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;

  

    constructor(  
      public appService:AppService,
      public router: Router,
      vcr: ViewContainerRef) {
        
       }
   

  ngOnInit() {
  }

  public goToSignIn: any = () => {

    this.router.navigate(['/']);

  } // end goToSignIn

  public signupFunction: any = () => {

    if (!this.firstName) {
      //this.toastr.warning('enter first name')
      alert("enter first name");
     

    }
     else if (!this.lastName) {
     // this.toastr.warning('enter last name')
     alert("enter last name");

    }
     else if (!this.mobile) {
      //this.toastr.warning('enter mobile')
      alert("enter mobile");

    } 
    else if (!this.email) {
      //this.toastr.warning('enter email')
      alert("enter email");

    }
     else if (!this.password) {
     // this.toastr.warning('enter password')
     alert("enter password");

    }
     else if (!this.apiKey) {
      //this.toastr.warning('Enter your API key')
      alert("Enter your API key");

    } else {

      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      }

      console.log(data);

      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {

          console.log(apiResponse);

          if (apiResponse.status === 200) {

            //this.toastr.success('Signup successful');
               alert("Signup successful");
            setTimeout(() => {

              this.goToSignIn();

            }, 2000);

          } else {

            //this.toastr.error(apiResponse.message);
            alert(apiResponse.message);

          }

        }, (err) => {

          //this.toastr.error('some error occured');
          alert("some error occured");

        });

    } // end condition

  } // end signupFunction

}
