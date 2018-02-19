import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as Enumerable from "linq-es2015"; 

/**
 * Generated class for the SearchBarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search-bar',
  templateUrl: 'search-bar.html',
})
export class SearchBarPage {
  items:any[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loadData();

  }

  private loadData() {
    this.items=[];
    this.items.push("Apple");
    this.items.push("Pine Apple");
    this.items.push("Green Apple");
    this.items.push("Bannana");
    this.items.push("Lemon");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchBarPage');
  }
  cancelFilter(){
    this.loadData();
  }
  filterItems(keyword){
    console.log(keyword);
    keyword =keyword.target.value;
    // return Enumerable.asEnumerable(this.items).Where(i=>i.indexOf(keyword)>0);
    this.items=Enumerable.asEnumerable(this.items).Where(i=>i.toLowerCase().indexOf(keyword.toLowerCase())>-1).ToArray();
    // if (keyword ) {
    //   this.items = this.items.filter((item) => {
    //     return (item.toLowerCase().indexOf(keyword.toLowerCase()) > -1);
    //   })
    // }

  }
}
