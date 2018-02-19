import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the PopOverCoontentComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pop-over-coontent',
  templateUrl: 'pop-over-coontent.html'
})
export class PopOverCoontentComponent {

  txtColor: string;
  content:any;

  ngOnInit() {
    if (this.navParms.data) {
      console.log(this.navParms.data.data );
    this.content =this.navParms.data.data;
    }
  }


  constructor(private navParms:NavParams) {
    
  }

  changeFontColor(){
    this.content.nativeElement.style.color=this.txtColor; 
  }
}
