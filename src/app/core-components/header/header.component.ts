import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  user = {
    // name:  "Irena",
    name: "",
    // photoUrl: "../../../assets/avatar-header.img/20210509_124052.jpg",
    photoUrl: "",
    photoUrlDefolt: "../../../assets/avatar-header.img/4213460-account-avatar-head-person-profile-user_115386.png",
    id: "",
  };  

  ngOnInit(): void {
  }
}
