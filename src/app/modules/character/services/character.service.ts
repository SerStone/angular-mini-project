import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {ICharacter, ICharacterPrimary} from "../interfaces";
import {urls} from "../../../configs";

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private httpClient:HttpClient) { }
  getAll(page= 1): Observable<ICharacterPrimary>{
    return this.httpClient.get<ICharacterPrimary>(urls.character,{params:{page}});
  }
  getById(id:number):Observable<ICharacter>{
    return this.httpClient.get<ICharacter>(`${urls.character}/${id}`);
  }
}
