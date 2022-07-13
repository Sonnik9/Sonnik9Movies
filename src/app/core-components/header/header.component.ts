import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  user = {
    name:  "Nik",
    photoUrl: "",    
    photoUrlDefolt: "../../../assets/header/login.svg",
    id: "",
  };  

  ngOnInit(): void {
  }
}
