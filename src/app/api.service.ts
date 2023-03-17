import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getPeopleData(): any {
    return this.http.get('https://swapi.dev/api/people/');
  }
  getPeopleDetail(id: number): any {
    return this.http.get('https://swapi.dev/api/people/'+id);
  }
}
