import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

//States
import { HomePage } from '../pages/home/home';
import { Lobby } from '../pages/lobby/lobby';
import { Login } from '../pages/login/login';
import { Questions } from '../pages/questions/questions';
import { Register } from '../pages/register/register';
import { Results } from '../pages/results/results';

//Services
import { SSFUserService } from '../providers/ssfUserService';
import { Observable } from 'rxjs/Rx';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Lobby,
    Login,
    Questions,
    Register,
    Results
  ],
  
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Lobby,
    Login,
    Questions,
    Register,
    Results
  ],
  
  providers: [SSFUserService]
  
})

export class AppModule {}
