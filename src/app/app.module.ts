import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ChartModule } from 'ng2-chartjs2';
import { Storage } from '@ionic/storage';

//States
import { HomePage } from '../pages/home/home';
import { Lobby } from '../pages/lobby/lobby';
import { Login } from '../pages/login/login';
import { Questions } from '../pages/questions/questions';
import { Register } from '../pages/register/register';
import { Results } from '../pages/results/results';

//Services
import { SSFUserService } from '../providers/ssfUserService';
import { answerService } from '../providers/answer-service';
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
    IonicModule.forRoot(MyApp),
    ChartModule
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
  
  providers: [SSFUserService, answerService, Storage]
  
})

export class AppModule {}
