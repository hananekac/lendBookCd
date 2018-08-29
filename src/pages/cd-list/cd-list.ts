import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LendCdPage } from '../lend-cd/lend-cd';


@IonicPage()
@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  listCd=[];

  constructor(public navCtrl: NavController,
    public dataProvider: DataProvider,
    public modalCtrl: ModalController,
     public navParams: NavParams) {
  }

  ionViewWillEnter(){
    this.listCd = this.dataProvider.allCds();
  }

  lendCd(i){
    let modal = this.modalCtrl.create(LendCdPage, { index: i });
    modal.present();
  }

}
