import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.css']
})
export class PlanetDetailsComponent {
  details: any ;
  id!: number;
  constructor(private activatedRoute: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getPlanetDetail(this.id).subscribe((data: any) => {
      this.details = data;
    });
  }
}
