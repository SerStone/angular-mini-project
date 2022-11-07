import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {EpisodeService} from "../episode.service";
import {IEpisodePrimary} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodesResolver implements Resolve<IEpisodePrimary> {
  constructor(private episodeService:EpisodeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisodePrimary> {
    const page = route.queryParams['page'];
    return this.episodeService.getAll(page);
  }
}
