import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css']
})
export class PeopleDetailsComponent implements OnInit {

  details: any ;
  id!: number;
  constructor(private activatedRoute: ActivatedRoute, private service: ApiService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.service.getPeopleDetail(this.id).subscribe((data: any) => {
      this.details = data;
    });
  }

}
