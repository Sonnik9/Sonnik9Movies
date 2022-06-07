import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {
  public films = [
    {
      name: 'The Godfather',
      raiting: 87,
      img: 'https://festagent.com/system/tilda/tild3562-6362-4762-b036-653363663832__a01ccf32943f670ef632.jpg',
      old: 'mar 17 1948',
      janr: 'Drama, Crime',
      duration: '2h 55m',
      discription:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    },
    {
      movie: 'The Godfather',
      raiting: '87',
      img: 'https://festagent.com/system/tilda/tild3562-6362-4762-b036-653363663832__a01ccf32943f670ef632.jpg',
      old: 'mar 17 1948',
      janr: 'Drama, Crime',
      duration: '2h 55m',
      discription:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    },
    {
      movie: 'The Godfather',
      raiting: '87',
      img: 'https://festagent.com/system/tilda/tild3562-6362-4762-b036-653363663832__a01ccf32943f670ef632.jpg',
      old: 'mar 17 1948',
      janr: 'Drama, Crime',
      duration: '2h 55m',
      discription:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    },
    {
      movie: 'The Godfather',
      raiting: '87',
      img: 'https://festagent.com/system/tilda/tild3562-6362-4762-b036-653363663832__a01ccf32943f670ef632.jpg',
      old: 'mar 17 1948',
      janr: 'Drama, Crime',
      duration: '2h 55m',
      discription:
        'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
