import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacter, IEpisode, IEpisodePrimary} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private httpClient:HttpClient) { }


  getAll(page= 1): Observable<IEpisodePrimary>{
    return this.httpClient.get<IEpisodePrimary>(urls.episode,{params:{page}});
  }
  getById(id:number):Observable<IEpisode>{
    return this.httpClient.get<IEpisode>(`${urls.episode}/${id}`);
  }
  getCharacter(url:string): Observable<ICharacter> {
    return this.httpClient.get<ICharacter>(url)
  }
}
