import { Component, OnInit,Input} from '@angular/core';
import { Quotes} from '../quotes';
@Component({
  selector: 'app-quotes-votes',
  templateUrl: './quotes-votes.component.html',
  styleUrls: ['./quotes-votes.component.css']
})
export class QuotesVotesComponent implements OnInit {
@Input() quotes:Quotes;
  constructor() { }


  ngOnInit() {
  }

}
