import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { topRated } from './movies.mock';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(
    private http: HttpClient
    ) { }

  getTopRatedMovies(): Observable<any> {
    return of(topRated);
  }

}
