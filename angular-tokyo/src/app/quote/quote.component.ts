import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    Quotes = [
      new Quote(1, '-Muhammad Ali', '"Don’t count the days, make the days count."', new Date(1989, 8, 25) ),
      new Quote(2, '-Albert Einstein', '“I have no special talent. I am only passionately curious”', new Date(1967, 3, 6) ),
      new Quote(3, '-Steve Jobs', '“Stay hungry, stay foolish.”', new Date(2005, 1, 9) ),
      new Quote(4, '-Princess Diana', '“When you are happy you can forgive a great deal”', new Date(1980, 2, 14) ),
      new Quote(5, '-Confucious', '"Life is really simple, but men insist on making it complicated."', new Date(2002, 4, 17) ),
      new Quote(6, '-Tigger Woods', '“Winning is not always the barometer of getting better.”', new Date(2004, 5, 30) ),
    
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

  ngOnInit() {
  }

}