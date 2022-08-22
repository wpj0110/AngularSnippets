import { Component, Input } from '@angular/core';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService] //, AccountService]  //app.component.ts already has AccountService so I don't need a separate AccountService anymore. This is its child.
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>(); //don't need this anymore

  constructor(private accountService : AccountService) {}

  onSetTo(status: string) {
    //this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountService.updateStatus(this.id, status);
    //this.loggingService.logStatusChange(status); //already injected in accounts.service.ts
  }
}
