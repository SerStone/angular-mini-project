import {Component, Input, OnInit} from '@angular/core';

import {ICharacter} from "../../interfaces";

@Component({
  selector: 'app-episode-character',
  templateUrl: './episode-character.component.html',
  styleUrls: ['./episode-character.component.css']
})
export class EpisodeCharacterComponent implements OnInit {
  @Input()
character:ICharacter;
  constructor() { }

  ngOnInit(): void {
  }

}
