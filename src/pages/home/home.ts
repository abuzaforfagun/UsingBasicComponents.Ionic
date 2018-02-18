import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { RadioAlertPage } from '../radio-alert/radio-alert';
import { LoadingPage } from '../loading/loading';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items:any[];
  constructor(public navCtrl: NavController) {
    this.items=[];
    this.items.push(
      {
        title:"Action Sheet"
      },
      {
        title:"Radio Alert"
      },
      {
        title:"Loading"
      },
      {
        title:"Menu"
      },
    );
  }

  tapSingleComponentItem(item:any){
    console.log(item.title);
    if(item.title=="Radio Alert"){
      this.navCtrl.push(RadioAlertPage);
      
    }else if(item.title=="Action Sheet"){
      this.navCtrl.push(ActionSheetPage);  
    }else if(item.title=="Loading"){
      this.navCtrl.push(LoadingPage);  
    }else if(item.title=="Menu")
    {
    }
  }

}
