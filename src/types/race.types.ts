export interface RaceSchedules {
  season: string;
  Races: Race[];
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: string;
  time: string;
  FirstPractice: FirstPractice;
  SecondPractice: FirstPractice;
  ThirdPractice?: FirstPractice;
  Qualifying: FirstPractice;
  Sprint?: FirstPractice;
}

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location;
}

export interface Location {
  lat: string;
  long: string;
  locality: string;
  country: string;
}

export interface FirstPractice {
  date: string;
  time: string;
}
