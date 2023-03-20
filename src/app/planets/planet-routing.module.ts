import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPlanetsComponent } from './list-planets/list-planets.component'; 
import { PlanetDetailsComponent } from './planet-details/planet-details.component'; 

const routes: Routes = [
  {path: '', component: ListPlanetsComponent},
  {path: 'planets', component: ListPlanetsComponent},
  {path: 'planet/:id', component: PlanetDetailsComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetRoutingModule { }