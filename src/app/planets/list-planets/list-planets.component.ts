import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list-planets',
  templateUrl: './list-planets.component.html',
  styleUrls: ['./list-planets.component.css']
})
export class ListPlanetsComponent {
  planetData = [];

  constructor(private dataservice: ApiService) { }

  ngOnInit(): void {
    this.dataservice.getPlanetData().subscribe((data: any) => {
      this.planetData = data["results"];
    });
  }
}
