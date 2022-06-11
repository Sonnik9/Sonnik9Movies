import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {

  films: any;

  constructor(
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.moviesService.getTrending()
      .subscribe(data => {
        console.log(data);
      });
  }

}
