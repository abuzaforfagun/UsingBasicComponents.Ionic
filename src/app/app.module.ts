import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {ActionSheetPage} from '../pages/action-sheet/action-sheet'
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RadioAlertPage } from '../pages/radio-alert/radio-alert';
import { LoadingPage } from '../pages/loading/loading';
import { PopOverPage } from '../pages/pop-over/pop-over';
import { PopOverCoontentComponent } from '../components/pop-over-coontent/pop-over-coontent';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    ActionSheetPage,
    RadioAlertPage,
    LoadingPage,
    PopOverPage,
    PopOverCoontentComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ActionSheetPage,
    RadioAlertPage,
    LoadingPage,
    PopOverPage,
    PopOverCoontentComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
