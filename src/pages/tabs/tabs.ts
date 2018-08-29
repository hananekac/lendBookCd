import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  bookRoot = 'BookListPage'
  cdRoot = 'CdListPage'

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

}
