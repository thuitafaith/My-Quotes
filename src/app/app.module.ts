import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { QuotesFormsComponent } from './quotes-forms/quotes-forms.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesVotesComponent } from './quotes-votes/quotes-votes.component';
import { DateCountPipe } from './date-count.pipe';



@NgModule({
  declarations: [
    AppComponent,
    QuotesFormsComponent,
    QuotesDetailsComponent,
    QuotesVotesComponent,
    DateCountPipe,

  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
