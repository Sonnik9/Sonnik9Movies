import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { TopRatedMoviesComponent } from './top-rated-movies/top-rated-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesPageComponent,
    TopRatedMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
