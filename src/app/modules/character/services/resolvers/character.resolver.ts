import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {CharacterService} from "../character.service";
import {ICharacter} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class CharacterResolver implements Resolve<ICharacter> {
  constructor(private characterService:CharacterService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICharacter> {
    const {id} = route.params;
    return this.characterService.getById(id);
  }
}
