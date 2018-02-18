import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the RadioAlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-radio-alert',
  templateUrl: 'radio-alert.html',
})
export class RadioAlertPage {
  textColor:string;
  constructor(public navCtrl: NavController, 
            public navParams: NavParams,
            private alertCtrl: AlertController) {
  }

  showRadioAlert(){
    let alert = this.alertCtrl.create(
      {
        title:"Pick text color",
        inputs:[
          {
            type: 'radio',
            label: 'Blue',
            value: 'blue',
          },
          {
            type: 'radio',
            label: 'Red',
            value: 'red',
          },
          {
            type: 'radio',
            label: 'Yellow',
            value: 'yellow',
          }
        ]
      }
    )
    alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.textColor=data;
      }
    });
    alert.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RadioAlertPage');
  }

}
