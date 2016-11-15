import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { History } from '../history/history';
import { HomePage } from '../home/home';
import { Questions } from '../questions/questions';


@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})

export class Lobby {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Lobby Page');
  }
  
  history() {
    this.navCtrl.push(History);
  }
  
  takeTest() {
    this.navCtrl.push(Questions);
  }
  
  logout() {
    this.navCtrl.push(HomePage);
  }
  
}
