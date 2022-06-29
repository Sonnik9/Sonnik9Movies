import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { MoviesPageComponent } from './components/movies-page/movies-page.component';
import { PeopleComponent } from './components/people/people.component';
import { TvShowsComponent } from './components/tv-shows/tv-shows.component';

const routes: Routes = [
  { path: 'movies', component: MoviesPageComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'tvshows', component: TvShowsComponent },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
