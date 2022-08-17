import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    @Output() headerEmitter = new EventEmitter<string>();
    collapsed = true;

    onHeaderClick(selected:string) {
        this.headerEmitter.emit(selected);
    }
}