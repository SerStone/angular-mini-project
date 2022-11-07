import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {EpisodeService} from "../episode.service";
import {IEpisode} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class EpisodeResolver implements Resolve<IEpisode> {
  constructor(private episodeService:EpisodeService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IEpisode> {
    const {id} = route.params;
    return this.episodeService.getById(id);
  }
}
