import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Questions } from '../questions/questions';
import { Results } from '../results/results';

@Component({
  selector: 'page-lobby',
  templateUrl: 'lobby.html'
})

export class Lobby {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Lobby Page');
  }
  
  results() {
    this.navCtrl.push(Results);
  }
  
  takeTest() {
    this.navCtrl.push(Questions);
  }
  
  logout() {
    this.navCtrl.push(HomePage);
  }
  
}
