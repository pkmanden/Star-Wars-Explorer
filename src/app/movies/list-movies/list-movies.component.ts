import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})

export class ListMoviesComponent implements OnInit {
  movieData = [];

  constructor(private dataservice: ApiService) { }

  ngOnInit(): void {
    this.dataservice.getMovieData().subscribe((data: any) => {
      this.movieData = data["results"];
    });
  }
}
