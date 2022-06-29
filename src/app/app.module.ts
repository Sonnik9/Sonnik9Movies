import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { TopRatedMoviesComponent } from './components/movies-page/top-rated-movies/top-rated-movies.component';
import { HeaderComponent } from './core-components/header/header.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';
import { PeopleComponent } from './components/people/people.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { ComingSoonComponent } from './components/movies-page/coming-soon/coming-soon.component';
import { TrendingComponent } from './components/movies-page/trending/trending.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    TopRatedMoviesComponent,
    HeaderComponent,
    TvShowsComponent,
    PeopleComponent,
    LeaderboardComponent,
    ComingSoonComponent,
    TrendingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
