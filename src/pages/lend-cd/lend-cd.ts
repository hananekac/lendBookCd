import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { CD } from '../../models/Cd';



@IonicPage()
@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index:number;
  cd:CD;
  constructor(public navCtrl: NavController,
    public dataProvider: DataProvider,
    public viewCtrl: ViewController,
     public navParams: NavParams) {
       this.index = this.navParams.get('index');
       this.cd= this.dataProvider.getCdByIndex(this.index);
  }

  lend(){
    this.dataProvider.lend('cd',this.index);
  }

  return(){
    this.dataProvider.return('cd',this.index);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }

}
