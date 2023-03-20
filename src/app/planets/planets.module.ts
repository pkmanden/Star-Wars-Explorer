import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlanetsComponent } from './list-planets/list-planets.component';
import { PlanetDetailsComponent } from './planet-details/planet-details.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { PlanetRoutingModule } from './planet-routing.module';



@NgModule({
  declarations: [
    ListPlanetsComponent,
    PlanetDetailsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
    PlanetRoutingModule
  ],
  exports: [
    ListPlanetsComponent,
    PlanetDetailsComponent
  ]
})
export class PlanetsModule { }
