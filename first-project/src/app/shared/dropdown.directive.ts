import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]' //notice this at recipe-detail.component.html line 15 and header.component.html line 15
})
export class DropdownDirective { //must add this to the app.module.ts
    @HostBinding('class.open') isOpen = false; //binds to the css class "open"
    
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }

}