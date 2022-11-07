import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatPaginatorModule} from "@angular/material/paginator";

import {EpisodeRoutingModule } from './episode-routing.module';
import {EpisodeDetailsComponent} from "./components/episode-details/episode-details.component";
import {EpisodesComponent} from "./components/episodes/episodes.component";
import {EpisodeComponent} from "./components/episode/episode.component";
import {EpisodeService} from "./services";
import {EpisodeCharacterComponent } from './components/episode-character/episode-character.component';


@NgModule({
  declarations: [
    EpisodesComponent,
    EpisodeComponent,
    EpisodeDetailsComponent,
    EpisodeCharacterComponent
  ],
    imports: [
        CommonModule,
        EpisodeRoutingModule,
        MatPaginatorModule
    ],
  providers:[
    EpisodeService
  ]
})
export class EpisodeModule { }
