import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.scss']
})
export class ExerciceComponent implements OnInit {
  fulltext: string = "welcome TO pipe ... 11111"
  numero: number= 3.425478
  date= new Date();
  list: any[]=[{ id: 1, fname: 'Vikram'},
  { id: 2, fname: 'Vivek'},
  { id: 3, fname: 'Vijay'}]
  filterdata: any;
  

  constructor() { }

  ngOnInit(): void {
  }
  conteur(){
    return new Array(this.fulltext.length);
  }


}
