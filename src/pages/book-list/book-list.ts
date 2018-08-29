import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LendBookPage } from '../lend-book/lend-book';

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  listBooks=[];

  constructor(public navCtrl: NavController,
    public dataProvider: DataProvider,
    public modalCtrl: ModalController,
     public navParams: NavParams) 
  {
    

  }


  ionViewWillEnter(){
    this.listBooks = this.dataProvider.allBooks();
  }

  lendBook(i){
    let bookModal = this.modalCtrl.create(LendBookPage, { index: i });
    bookModal.present();
  }

}
