import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { RadioAlertPage } from '../radio-alert/radio-alert';
import { LoadingPage } from '../loading/loading';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,menu: MenuController) {
    menu.enable(true);
  }
  openPage(pageName){
    switch(pageName)
    {
      case "Action Sheet":
      {
        console.log("actio sheet");
        this.navCtrl.push(ActionSheetPage);  
      }
      case "Radio Alert":
      {
        console.log("radio alert");
        this.navCtrl.push(RadioAlertPage);
      }
      case "Loading":{
        this.navCtrl.push(LoadingPage);
      }
      case "Home Page":{
        this.navCtrl.push(HomePage);
      }
    }
  }

  closeMenu(){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
