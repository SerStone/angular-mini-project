import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {ICharacter, IEpisode} from "../../interfaces";
import {EpisodeService} from "../../services";

@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.component.html',
  styleUrls: ['./episode-details.component.css']
})
export class EpisodeDetailsComponent implements OnInit {
episode:IEpisode;
characters:ICharacter[]=[];
id:number;
  constructor(private activatedRoute:ActivatedRoute,private episodeService:EpisodeService) { }

  ngOnInit(): void {
this.activatedRoute.data.subscribe(({episode})=> {
  this.episode = episode
  episode.characters.map((character: string) => this.episodeService.getCharacter(character).subscribe(character => {
    this.characters.push(character)
  }))
})
  }

}
