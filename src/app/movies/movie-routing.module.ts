import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListMoviesComponent } from './list-movies/list-movies.component'; 
import { MovieDetailsComponent } from './movie-details/movie-details.component'; 

const routes: Routes = [
  {path: '', component: ListMoviesComponent},
  {path: 'movies', component: ListMoviesComponent},
  {path: 'movie/:id', component: MovieDetailsComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }