import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  MediaType,
  Movie,
  MovieListResponse,
  TimeWindow,
} from '../models/movies';
import { HttpService } from './http-services';
import { topRated } from './movies.mock';
import { postersComingSoon } from  './coming.mock';

@Injectable({
  providedIn: 'root',
})
export class MoviesService extends HttpService {
  constructor(private http: HttpClient) {
    super();
  }

  getComingSoon(): Observable<any> {
    return of(postersComingSoon);
  }

  getTopRatedMovies(): Observable<MovieListResponse> {
    return of(topRated);
  }

  getTrending(
    mediaType: MediaType = 'movie',
    time: TimeWindow = 'day',
    query: any = {}
  ): Observable<MovieListResponse> {
    const options = this.generateRequestOptions(query);
    return this.http.get<MovieListResponse>(
      `${environment.api}trending/${mediaType}/${time}`,
      options
    );
  }
}
