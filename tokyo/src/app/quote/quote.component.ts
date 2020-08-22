import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 Quotes = [
   new Quote(1, '-Brenda Mwangi', '"Be happy, Never gloomy"', new Date(2020, 8, 22)),
   new Quote(2, '-Mother Teresa', '"If you judge people, you have no time to love them."',new Date(2015, 8, 22)),
   new Quote(3,'- Buddha', '"All that we are is the result of what we have thought"',new Date(2010, 1, 12) ),
   new Quote(4, '-Steve Jobs', '"Stay hungry, Stay foolish"', new Date(2009, 8, 30)),
   new Quote(5, '-Coco Chanel ', '"The most courageous act is still to think for yourself. Aloud"', new Date(1999, 4, 22)),
   new Quote(6, '-Malcolm X', '"The future belongs to those who prepare for it today"',new Date(1966, 8, 22)),
   new Quote(7,'-Bruce Lee', '"The successful warrior is the average man, with laser-like focus"',new Date(1998, 1, 12) ),
   new Quote(8, '-Muhammad Ali', '"Don’t count the days, make the days count"', new Date(1999, 3, 30)),
 ]
 toogleDetails(index){
  this.Quotes[index].showDescription =!this.Quotes[index].showDescription;
}
addNewQuote(quote){
  let quoteLength = this.Quotes.length;
  quote.id=quote.Length+1
  quote.completeDate = new Date(quote.completeDate)
  this.Quotes.push(quote)

}
deleteQuote(isComplete,index){
  if (isComplete){
      let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
      
      if(toDelete){
          this.Quotes.splice(index,1)
      }
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
