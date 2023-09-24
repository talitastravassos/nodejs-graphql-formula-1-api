export interface Circuits {
  CircuitTable: CircuitTable;
}

export interface CircuitTable {
  season: string;
  Circuits: ICircuit[];
}

export interface ICircuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface ILocation {
  lat: string;
  long: string;
  locality: string;
  country: string;
}
