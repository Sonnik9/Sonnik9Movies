import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MediaType, MovieListResponse, TimeWindow } from '../models/movies';
import { HttpService } from './http-services';

@Injectable({
  providedIn: 'root'
})
export class MoviesService extends HttpService {

  constructor(
    private http: HttpClient,
  ) {
    super();
  }

  getTrending(mediaType: MediaType = 'movie', time: TimeWindow = 'day', query: any = {}): Observable<MovieListResponse> {
    const options = this.generateRequestOptions(query);
    return this.http.get<MovieListResponse>(`${environment.api}trending/${mediaType}/${time}`, options);
  }
}
