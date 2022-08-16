import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
  //encapsulation: ViewEncapsulation.Emulated
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class ServerElementComponent implements OnInit, OnChanges {
  //@Input('srvElement') element: {type: string, name: string, content: string}; //To allow parent components to bind into its child components, you need a decorator. In this case, it's @Input
  @Input() element: {type: string, name: string, content: string}; //To allow parent components to bind into its child components, you need a decorator. In this case, it's @Input
  
  constructor() { 
    console.log("constructor called!");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }
  

  ngOnInit(): void {
    console.log("ngOnInit called!");
  }

}
