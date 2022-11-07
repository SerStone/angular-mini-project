import {ICharacter} from "./character.interface";

export interface IEpisodePrimary {
  info:IEpisodeInfo;
  results:IEpisode[];
}

export interface IEpisodeInfo {
  count:number;
  pages:number;
  next:string | null;
  prev:string | null;
}

export interface IEpisode{
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: ICharacter[];
  url: string;
  created: string;
}

