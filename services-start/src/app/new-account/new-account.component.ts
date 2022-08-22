import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../accounts.service';
//import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService] //, AccountService] //app.component.ts already has AccountService so I don't need a separate AccountService anymore. This is its child.
})
export class NewAccountComponent {
  //@Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private accountService: AccountService) {

  }

  onCreateAccount(accountName: string, accountStatus: string) {
    //Don't need this anymore. Just use the service that you created.
    //this.accountAdded.emit({
    //  name: accountName,
    //  status: accountStatus
    //});
    this.accountService.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus); //already injected in accounts.service.ts
  }
}
