export interface Circuits {
  season: string;
  Circuits: Circuit[];
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  location: Location | null;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
