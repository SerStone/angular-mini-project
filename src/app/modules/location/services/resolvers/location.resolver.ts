import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {ILocation} from "../../interfaces";
import {LocationService} from "../location.service";

@Injectable({
  providedIn: 'root'
})
export class LocationResolver implements Resolve<ILocation> {
  constructor(private locationService:LocationService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ILocation> {
    const {id} = route.params;
    return this.locationService.getById(id);
  }
}
