import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  details: any ;
  id!: number;
  constructor(private activatedRoute: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getMovieDetail(this.id).subscribe((data: any) => {
      this.details = data;
    });
  }
}
