import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  peopleData = [];

  constructor(private dataservice: ApiService) { }

  ngOnInit(): void {
    this.dataservice.getPeopleData().subscribe((data: any) => {
      this.peopleData = data["results"];
    });
  }

}
