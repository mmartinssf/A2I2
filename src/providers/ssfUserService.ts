import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class SSFUserService {
    
    constructor(private http: Http) {
        console.log('Hello SSFUserService');
    }
    //SSFUsersRest
    userLogin(UserData) {
        return this.http
        .post("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers/login", UserData);
    }
    //SSFUsersRest
    userRegister(newUserData) {
        return this.http
        .post("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers", newUserData);
    }
    //SSFUsersRest
    userLogout(token) {
        return this.http
        .post("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers/logout?access_token=" + token, {});
    }
    //QuestionsRest
    userResults(token) {
        return this.http
        .get("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers/Questions?access_token=" + token);
    }
    //TestResultsRest
    userSave(test, token) {
        return this.http
        .post("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers/TestResults?access_token=" + token, test);
    }
    //TestResultsRest
    userAll(token, userId) {
        return this.http
        .get("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers/TestResults?filter[where][userID]=" + userId + "&access_token=" + token);
    }

   
}   
    





