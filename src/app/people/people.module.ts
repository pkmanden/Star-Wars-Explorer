import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';

import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { RouterModule } from '@angular/router';
import { PeopleRoutingModule } from './people-routing.module';

@NgModule({
  declarations: [
    ListPeopleComponent,
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatSidenavModule,
    RouterModule,
    PeopleRoutingModule
  ],
  exports: [
    ListPeopleComponent,
    PeopleDetailsComponent 
  ]
})
export class PeopleModule { }
