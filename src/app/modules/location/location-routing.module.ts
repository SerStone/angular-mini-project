import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LocationsComponent} from "./components/locations/locations.component";
import {LocationDetailsComponent} from "./components/location-details/location-details.component";
import {LocationsResolver} from "./services/resolvers/locations.resolver";
import {LocationResolver} from "./services/resolvers/location.resolver";

const routes: Routes = [
  {path:'',component:LocationsComponent,runGuardsAndResolvers:'paramsOrQueryParamsChange',resolve:{locations:LocationsResolver}},
  {path:':id',component:LocationDetailsComponent,resolve:{location:LocationResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
