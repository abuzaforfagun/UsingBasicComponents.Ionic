import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { RadioAlertPage } from '../radio-alert/radio-alert';
import { LoadingPage } from '../loading/loading';
import { MenuPage } from '../menu/menu';

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
    switch(item.title)
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
      case "Menu":{

      }
    }
  }

}
