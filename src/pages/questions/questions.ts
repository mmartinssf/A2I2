import { OnInit } from 'angular2/core';
import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import { SSFUserService } from '../../providers/ssfUserService';
import { Result } from '../result/result';
import { QuestionService } from '../../providers/question-service';

@Component({
    selector: 'page-questions',
    templateUrl: 'questions.html'
})

export class Questions {
    
    id = undefined
    questions = undefined
    total = undefined
    token = undefined
    userID = undefined

    constructor(
    public navCtrl: NavController,
    public userService: SSFUserService,
    public navParams: NavParams,
    public qService: QuestionService) {}

    ionViewDidLoad() {
        console.log('Hello Question Page');
    }

    ngOnInit() {
        this.userService.userResults(this.token)
        .subscribe(data => this.questions = data
        );
    }


}    