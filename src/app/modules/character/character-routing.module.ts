import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CharactersComponent} from "./components/characters/characters.component";
import {CharactersResolver} from "./services/resolvers/characters.resolver";
import {CharacterResolver} from "./services/resolvers/character.resolver";
import {CharacterDetailsComponent} from "./components/character-details/character-details.component";


const routes: Routes = [
  {path: '',component:CharactersComponent,runGuardsAndResolvers:'paramsOrQueryParamsChange',resolve:{data:CharactersResolver}},
  {path:':id',component:CharacterDetailsComponent,resolve:{character:CharacterResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule { }
