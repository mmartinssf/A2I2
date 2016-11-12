import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()

export class SSFUserService {
    
    constructor(private http: Http) {
        console.log('Hello SSFUserService');
    }
    
    userLogin(UserData) {
        return this.http
        .post("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers/login", UserData);
    }
    
    userRegister(newUserData) {
        return this.http
        .post("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers", newUserData);
    }
    
    userLogout(token) {
        return this.http
        .post("https://strongloop-backend-martinssf.c9users.io:8080/api/SSFUsers/logout?access_token=" + token, {});
    }
 
}   
    





