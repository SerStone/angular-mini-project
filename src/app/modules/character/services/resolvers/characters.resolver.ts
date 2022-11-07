import { Injectable } from '@angular/core';
import {
   Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import {ICharacterPrimary} from "../../interfaces";
import {CharacterService} from "../character.service";

@Injectable({
  providedIn: 'root'
})
export class CharactersResolver implements Resolve<ICharacterPrimary> {
  constructor(private characterService:CharacterService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacterPrimary> {
     const page = route.queryParams['page'];
    return this.characterService.getAll(page);
  }
}
