import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss'],
})
export class TopRatedMoviesComponent implements OnInit {
  films: any;
  mostRatedFilm: any;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getTopRatedMovies().subscribe((data) => {
      this.mostRatedFilm = data.results[0];
      this.films = data.results.slice(1);
    });
  }
}
