import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MovieRoutingModule } from './movie-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ListMoviesComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    MovieRoutingModule,
    RouterModule
  ],
  exports: [
    ListMoviesComponent,
    MovieDetailsComponent
  ]
})
export class MoviesModule { }
