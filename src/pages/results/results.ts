import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'ng2-chartjs2';
import { Storage } from '@ionic/storage';
import { SSFUserService } from '../../providers/ssfUserService';
import { answerService } from '../../providers/answer-service';

@Component({
  selector: 'page-results',
  templateUrl: 'results.html'
})

export class Results {
  
  labels: string[];
  answers = undefined;
  data: Chart.Dataset[];

  constructor(
    public navCtrl: NavController,
    public userService: SSFUserService,
    public aService: answerService) {
      this.answers = this.aService.getAnswers();
      this.createChart(); 
    }

  ionViewDidLoad() {
    console.log('Hello ResultsPage Page');
  }

  createChart() {
    this.labels = [
      'Competing',
      'Collaborating',
      'Compromising',
      'Avoiding',
      'Accommodating'
    ],
    this.data = [{
      label: 'Thomas-Killman Conflict Management Results',
      data: [
        this.answers.competing/12*100,
        this.answers.collaborating/12*100,
        this.answers.compromising/12*100,
        this.answers.avoiding/12*100,
        this.answers.accommodating/12*100
      ],
      backgroundColor: [
        'rgba(255,99,132,0.2)',
        'rgba(54,162,235,0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54,162,235,1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }];
  }
  
  
}
