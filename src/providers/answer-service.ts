import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SSFUserService } from './ssfUserService';

@Injectable()

export class answerService {
    
    constructor(
        public http: Http,
        public userService: SSFUserService) {
        console.log('Hello answerService');
    }
    
    answerCategories = {
        "competing": 0,
        "collaborating": 0,
        "compromising": 0,
        "avoiding": 0,
        "accommodating": 0
    }
    
    categoriesStack = []
    
    getAnswers() {
        return this.answerCategories;
    }
    
    saveAnswer(answerCategory) {
        this.answerCategories[answerCategory.toLowerCase()]++;
        this.categoriesStack.push(answerCategory);
    }
    
    resetAnswers() {
        for(var property in this.answerCategories) {
            if (this.answerCategories.hasOwnProperty(property)) {
                this.answerCategories[property] = 0;
            }
        }
    }
    
    eraseLastAnswer() {
        this.answerCategories[this.categoriesStack.pop().toLowerCase()]--;
    }
    
    getTests(token, userId) {
        return this.userService.userAll(token, userId);
    };
    
    setAnswers(answers) {
        this.answerCategories = answers;  
    };
    
    
}