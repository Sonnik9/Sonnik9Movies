import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar-header',
  templateUrl: './avatar-header.component.html',
  styleUrls: ['./avatar-header.component.scss']
})
export class AvatarHeaderComponent implements OnInit {

  @Input()
  public user: any;
  public showInitials = false;
  public initials: any;
  public idStr: any;
  public circleColor: any;

  private colors = [
    '#EB7181', // red
    '#468547', // green
    '#FFD558', // yellow
    '#3670B2', // blue
    '#3700B3',
    '#344955',
    '#5D1049',
    '#03DAC5',
    '#F4511E',
    '#009FD4',
  ];

  constructor() {}  

  ngOnInit() { 
    if (!this.user.photoUrl) {
      this.showInitials = true;
      this.createInititals();
      this.generateId(); 
      this.circleColor = this.colors[this.idStr];
    }
    if (!this.user.photoUrl && !this.user.name) {
      this.showInitials = false;
      this.user.photoUrl = this.user.photoUrlDefolt;
      this.circleColor = 'rgb(240, 240, 240)';
    }
  }

  private createInititals(): void {
    this.initials = this.user.name.substr(0, 1);     
  }

  private generateId(): void {  
    let protoIdNum = 0;
    for (let i = 0; i < this.user.name.length; i++) {
      protoIdNum = protoIdNum + this.user.name.charCodeAt(i)   
    }
    protoIdNum = protoIdNum + 123456789;
    this.idStr = String(protoIdNum).slice(-1);       
  }

}
