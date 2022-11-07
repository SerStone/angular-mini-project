import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from "@angular/material/paginator";

import { LocationRoutingModule } from './location-routing.module';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationComponent } from './components/location/location.component';
import { LocationDetailsComponent } from './components/location-details/location-details.component';


@NgModule({
  declarations: [
    LocationsComponent,
    LocationComponent,
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    LocationRoutingModule,
    MatPaginatorModule
  ]
})
export class LocationModule { }
