import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPeopleComponent } from './list-people/list-people.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

const routes: Routes = [
  {path: '', component: ListPeopleComponent},
  {path: 'people', component: ListPeopleComponent},
  {path: 'people/:id', component: PeopleDetailsComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }