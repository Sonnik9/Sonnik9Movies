import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {
  postersTrending: any;

  constructor(
    private moviesService: MoviesService,
  ) 
  {}

  ngOnInit(): void {
    this.moviesService.getPosterssTrending()
    .subscribe((data) => {
      this.postersTrending = data;
    })
  }

}
