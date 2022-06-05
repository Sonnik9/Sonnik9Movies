import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { PeopleComponent } from './people/people.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
const routes: Routes = [
  { path: '', component: MoviesPageComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'tvshows', component: TvShowsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
