import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class QuestionService {

  questions = []

  constructor(private http: Http) {}
  
  getQuestionSet(id) {
    return [
      this.questions[id],
      this.questions[id+1]
    ];
  }
  
  
}