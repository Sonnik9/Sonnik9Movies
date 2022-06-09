import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { HeaderComponent } from './header/header.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import { PeopleComponent } from './people/people.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    HeaderComponent,
    TvShowsComponent,
    PeopleComponent,
    LeaderboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
