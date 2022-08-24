import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-currency-convert',
  templateUrl: './currency-convert.component.html',
  styleUrls: ['./currency-convert.component.css']
})
export class CurrencyConvertComponent implements OnInit {
  currencies: any[] = ['USD', 'EUR', 'JPY', 'PHP', 'CHY', 'LYD'];

  fromAmount: number = 0;
  toAmount: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onConvertCurrency(amount: number) {
    //this.fromAmount = this.fromInputRef.nativeElement.valueOf();
    //this.toAmount = this.toInputRef.nativeElement.valueOf();
    this.fromAmount = amount;
    this.toAmount = amount;
  }

  onChooseCurrency(currencyChoice: any) {
    console.log(currencyChoice);
  }
}
