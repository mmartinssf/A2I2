import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SSFUserService } from '../../providers/ssfUserService';
import { Lobby } from '../lobby/lobby';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [SSFUserService]
  
})

  export class Login {
  
    constructor(
      public navCtrl: NavController,
      public userService: SSFUserService) {}
    
    ionViewDidLoad() {
      console.log('Hello Login Page');
    }
    
    user = {}
  
    Login(form) {
      if(form.invalid) 
        return alert("Please fill in all of the required fields.");
      
      this.userService.userLogin(this.user)
      .map(res => res.json())
      .subscribe(res => {
        window.localStorage.setItem('token', res.id);
        window.localStorage.setItem('userId', res.userId);
        this.navCtrl.setRoot(Lobby);
      }, err => {
        alert(err);
      });
      
    }
  }




