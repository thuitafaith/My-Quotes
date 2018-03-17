import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { QuotesFormsComponent } from './quotes-forms/quotes-forms.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';



@NgModule({
  declarations: [
    AppComponent,
    QuotesFormsComponent,
    QuotesDetailsComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
