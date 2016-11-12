import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Lobby } from '../lobby/lobby';
import { SSFUserService } from '../../providers/ssfUserService';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})

export class Register {
  
  constructor(
    public navCtrl: NavController,
    public userService: SSFUserService) {}
  
  user = {
    firstName: '',
    lastName: '',
    organization: '',
    email: '',
    password: ''
  }

  ionViewDidLoad() {
    console.log('Hello Register Page');
  }
  
  Register(form) {
      if(form.invalid) 
        return alert("Please fill in all of the required fields.");
      
      this.userService.userRegister(this.user)
      .map(res => res.json())
      .subscribe(res => {
        window.localStorage.setItem('token', res.id);
        window.localStorage.setItem('userId', res.userId);
        this.navCtrl.setRoot(Lobby);
      }, err => {
        alert(err);
      }
    );
  }
}
