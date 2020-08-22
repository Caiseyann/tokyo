import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
 Quotes = [
   new Quote(1, '-Brenda Mwangi', '"Be happy, Never gloomy"', new Date(2020, 8, 22))
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
