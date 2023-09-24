export interface Circuits {
  season: string;
  Circuits: ICircuit[];
}

export interface ICircuit {
  circuitId: string;
  url: string;
  circuitName: string;
  location: Location | null;
}

export interface ILocation {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
