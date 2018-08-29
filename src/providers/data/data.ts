import { Injectable } from '@angular/core';
import { Book } from '../../models/Book';
import { CD } from '../../models/Cd';

@Injectable()
export class DataProvider {

  private books: Book[]=[
    {
      'title' : 'Demain',
      'author' : 'Guillaume Misso',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, nulla non congue vulputate, ante sem blandit turpis, non tempus arcu nisi iaculis lacus',
      'isLended' : false
    },
    {
      'title' : 'Mes amis mes amours',
      'author' : 'Marc Levy',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, nulla non congue vulputate, ante sem blandit turpis, non tempus arcu nisi iaculis lacus',
      'isLended' : false
    },
    {
      'title' : 'Alchimiste',
      'author' : 'Paulo Coelho',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, nulla non congue vulputate, ante sem blandit turpis, non tempus arcu nisi iaculis lacus',
      'isLended' : true

    },
  ];

  private cds: CD[]=[
    {
      'title' : 'CD 1',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, nulla non congue vulputate, ante sem blandit turpis, non tempus arcu nisi iaculis lacus',
      'isLended' : false
    },
    {
      'title' : 'CD 2',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, nulla non congue vulputate, ante sem blandit turpis, non tempus arcu nisi iaculis lacus',
      'isLended' : false
    },
    {
      'title' : 'CD 3',
      'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit, nulla non congue vulputate, ante sem blandit turpis, non tempus arcu nisi iaculis lacus',
      'isLended' : true

    },
  ];
  constructor() {
    
  }

  allBooks(){
    return this.books;
  }

  allCds(){
    return this.cds;
  }

  getBookByIndex(index){
    return this.books[index];
  }


  getCdByIndex(index){
    return this.cds[index];
  }


  return(type,index){
    if(type =="book")
      this.books[index].isLended = false;
      else
      this.cds[index].isLended = false;
  }

  lend(type,index){
    if(type =="book")
      this.books[index].isLended = true;
      else
      this.cds[index].isLended = true;
  }

}
