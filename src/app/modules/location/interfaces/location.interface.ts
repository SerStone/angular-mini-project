export interface ILocationPrimary {
  info:ILocationInfo;
  results:ILocation[];
}
export interface ILocationInfo {
  count:number;
  pages:number;
  next: string|null;
  prev: string|null;
}

export interface ILocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

