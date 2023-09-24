import { type ICircuit } from './circuits.types';

export interface RaceSchedules {
  season: string;
  Races: Race[];
}

export interface Race {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: ICircuit;
  date: string;
  time: string;
  FirstPractice: FirstPractice;
  SecondPractice: FirstPractice;
  ThirdPractice?: FirstPractice;
  Qualifying: FirstPractice;
  Sprint?: FirstPractice;
}

export interface FirstPractice {
  date: string;
  time: string;
}
