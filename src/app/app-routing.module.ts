import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
// import { ListPeopleComponent } from './people/list-people/list-people.component';
// import { PeopleDetailsComponent } from './people/people-details/people-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, 
  { path: 'people', loadChildren: () => import('./people/people.module').then(m => m.PeopleModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
