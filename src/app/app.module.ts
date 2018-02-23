import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewReminderPage } from "../pages/new-reminder/new-reminder";
import{ AllRemindersPage} from "../pages/all-reminders/all-reminders";
import { TodayPage } from '../pages/today/today';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from "@ionic/storage";
//taken from https://ionicframework.com/docs/storage/

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewReminderPage,
    AllRemindersPage,
    TodayPage
    

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
//taken from https://ionicframework.com/docs/storage/

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewReminderPage,
    AllRemindersPage,
    TodayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
