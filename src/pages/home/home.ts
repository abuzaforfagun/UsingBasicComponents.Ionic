import { Component } from '@angular/core';
import { NavController, Loading } from 'ionic-angular';
import { ActionSheetPage } from '../action-sheet/action-sheet';
import { RadioAlertPage } from '../radio-alert/radio-alert';
import { LoadingPage } from '../loading/loading';
import { PopOverPage } from '../pop-over/pop-over';
import { RangePage } from '../range/range';

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
      {
        title:"Pop Over"
      },
      {
        title:"Range"
      }
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
    }else if(item.title=="Pop Over")
    {
      this.navCtrl.push(PopOverPage);
    }else if(item.title=="Range")
    {
      this.navCtrl.push(RangePage);
    }
  }

}
