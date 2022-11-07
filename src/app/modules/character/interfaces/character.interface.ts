export interface ICharacterPrimary {
  info:ICharacterInfo;
  results:ICharacter[];
}
export interface ICharacterInfo {
  count:number;
  pages:number;
  next: string|null;
  prev: string|null;
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: ICharacterOrigin;
  location: ICharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ICharacterOrigin {
  name: string;
  url: string;
}
export interface ICharacterLocation {
  name: string;
  url: string;
}
