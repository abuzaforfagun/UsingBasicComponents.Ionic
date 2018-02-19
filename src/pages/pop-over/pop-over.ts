import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { PopOverCoontentComponent } from '../../components/pop-over-coontent/pop-over-coontent';

/**
 * Generated class for the PopOverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pop-over',
  templateUrl: 'pop-over.html',
})
export class PopOverPage {
  @ViewChild('helloWorld') content:ElementRef;

  txtName:string="";
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private popOverCtrl: PopoverController) {
  }
  displayPopOver(){
    let popover = this.popOverCtrl.create(PopOverCoontentComponent,
      {data: this.content}
      );
    popover.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopOverPage');
  }

}
