import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            public loadingCtrl: LoadingController) {
  }
  displayLoading(){
    let loader=this.loadingCtrl.create({
      content:"Loading",

    });
    loader.present();
    
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

}
