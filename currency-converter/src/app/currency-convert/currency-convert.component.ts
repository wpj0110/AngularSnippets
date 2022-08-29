import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.css']
})
export class CurrencyConvertComponent implements OnInit {
  currencies: any[] = ['USD', 'EUR', 'JPY', 'PHP', 'CHY', 'LYD'];
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';

  fromAmount: number = 0;
  toAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onConvertCurrency(amount: number) {
    this.fromAmount = amount;
    this.toAmount = amount;
  }

  onChooseFromCurrency(currencyChoice: any) {
    console.log(currencyChoice);
    //this.fromCurrency = currencyChoice;
  }

  onChooseToCurrency(currencyChoice: any) {
    console.log(currencyChoice);
    //this.toCurrency = currencyChoice;
  }
}
