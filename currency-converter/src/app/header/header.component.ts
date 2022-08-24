import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() notifyHeader = new EventEmitter<string>();
  defaultHeader = "currencyConvert";

  onHeaderClick(selected:string){
      this.notifyHeader.emit(selected);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
