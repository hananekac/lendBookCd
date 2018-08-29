import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Book } from '../../models/Book';


@IonicPage()
@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

 index:number;
  book: Book;

  constructor(public navCtrl: NavController,
    public dataProvider: DataProvider,
    public viewCtrl: ViewController,
     public navParams: NavParams) 
  {
    this.index = this.navParams.get('index');
    this.book = this.dataProvider.getBookByIndex(this.index);
  }


  lend(){
    this.dataProvider.lend('book',this.index);
  }

  return(){
    this.dataProvider.return('book',this.index);
  }
  closeModal(){
    this.viewCtrl.dismiss();
  }
  

}
