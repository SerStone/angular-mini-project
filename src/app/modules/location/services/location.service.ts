import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {urls} from "../../../configs";
import {ILocation, ILocationPrimary} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient:HttpClient) { }
  getAll(page= 1): Observable<ILocationPrimary>{
    return this.httpClient.get<ILocationPrimary>(urls.location,{params:{page}});
  }
  getById(id:number):Observable<ILocation>{
    return this.httpClient.get<ILocation>(`${urls.location}/${id}`);
  }
}
