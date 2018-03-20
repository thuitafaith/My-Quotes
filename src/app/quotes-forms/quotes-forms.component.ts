import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
import {detailsArr} from '../detailsArr';
@Component({
  selector: 'app-quotes-forms',
  templateUrl: './quotes-forms.component.html',
  styleUrls: ['./quotes-forms.component.css']
})
export class QuotesFormsComponent implements OnInit {
  newQuote = new Quotes("","","")
  quoteForms=detailsArr;
  author: any;
  quote: any;
  by: any;
  title:string="Create New Quote";
  //quoteForms:Quotes[];
  constructor(){
//this.quoteForms = quoteForms;
}
  submitQuote(){
  this.quoteForms.push(this.newQuote);

  }



  ngOnInit() {
  }
}
