import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {LocationService} from "../location.service";
import {ILocationPrimary} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class LocationsResolver implements Resolve<ILocationPrimary> {
  constructor(private locationService:LocationService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILocationPrimary> {
    const page = route.queryParams['page'];
    return this.locationService.getAll(page);
  }
}
