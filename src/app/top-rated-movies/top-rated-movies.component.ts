import { Component, OnInit } from '@angular/core';
import { films } from './mock';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {

films = films  

  constructor() {}

  ngOnInit(): void {}
}
