import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss']
})
export class ComingSoonComponent implements OnInit {
  postersComingSoon: any;

  constructor(
    private moviesService: MoviesService,
  ) 
  {}

  ngOnInit(): void {
    this.moviesService.getComingSoon()
    .subscribe((data) => {
      this.postersComingSoon = data;
    })
  }

}
