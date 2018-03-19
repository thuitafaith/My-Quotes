import { Component, OnInit,Input} from '@angular/core';
import { Quotes } from "../quotes";
import {detailsArr} from '../detailsArr';
@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {
quotesArr = detailsArr;
  constructor() { }
delQuote(quote:Quotes){
  var index = this.quotesArr.indexOf(quote);

  this.quotesArr.splice(index,1);
  return false;
}
  ngOnInit() {
  }

}
