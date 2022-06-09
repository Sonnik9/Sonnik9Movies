import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  postersComingSoon = [
    '/assets/img.ComingSoon/Rectangle\ 15.png',
    '/assets/img.ComingSoon/Rectangle\ 16.png',
    '/assets/img.ComingSoon/Rectangle\ 17.png',
    '/assets/img.ComingSoon/Rectangle\ 18.png',
    '/assets/img.ComingSoon/Rectangle\ 19.png',
];

  constructor() { }

  ngOnInit(): void {
  }

}
