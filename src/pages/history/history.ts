import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'ng2-chartjs2';
import { Storage } from '@ionic/storage';
import { SSFUserService } from '../../providers/ssfUserService';
import { answerService } from '../../providers/answer-service';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})

export class History {
  
  answers = undefined;

  constructor(
    public navCtrl: NavController,
    public userService: SSFUserService,
    public aService: answerService) {}
    
  tests = []

  ionViewDidLoad() {
    console.log('Hello HistoryPage Page');
  }
  
  goToResult(test) {
    this.answers = {
      "competing": test.competing,
      "collaborating": test.collaborating,
      "compromising": test.compromising,
      "avoiding": test.avoiding,
      "accommodating": test.accommodating
    };
    this.aService.setAnswers(this.answers);
  };
  

}
