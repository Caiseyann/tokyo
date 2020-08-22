import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 Quotes = [
   new Quote(1, '-Brenda Mwangi', '"Be happy, Never gloomy"', new Date(2020, 8, 22)),
   new Quote(2, '-Mother Teresa', '"If you judge people, you have no time to love them."',new Date(2015, 8, 22)),
   new Quote
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
