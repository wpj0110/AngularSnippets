import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  userName = "";
  serverCreationStatus = "No Server Has Been Added...";
  serverName = "";
  serverCreated = false;
  servers = ['TestServer 1', 'TestServer 2'];
  isShowParagraph = false;
  logs = [];
  //counter = 1;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    //this.logs.push("Add Server Button Clicked");
    this.serverCreationStatus = "Server Creation Done! Name is: " + this.serverName;
  }

  onResetUsername() {
    //this.logs.push("Reset Username Button Clicked");
    this.userName = "";
  }

  onUpdateServerName(event : Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event : Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  showParagraph() {
    //this.logs.push("Display Paragraph Clicked");
    this.logs.push(this.logs.length + 1);
    return this.isShowParagraph = !this.isShowParagraph;
  }

}
