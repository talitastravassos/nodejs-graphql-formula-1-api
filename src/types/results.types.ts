import { type Circuit } from './circuits.types';
import { type Driver } from './driver.types';

export interface Results {
  season: string;
  round: string;
  Races: RaceResult[];
}

export interface RaceResult {
  season: string;
  round: string;
  url: string;
  raceName: string;
  Circuit: Circuit;
  date: Date;
  time: string;
  Results: Result[];
}

export interface Result {
  number: string;
  position: string;
  positionText: string;
  points: string;
  Driver: Driver;
  Constructor: Constructor;
  grid: string;
  laps: string;
  status: Status;
  Time?: ResultTime;
  FastestLap?: FastestLap;
}

export interface Constructor {
  constructorId: string;
  url: string;
  name: string;
  nationality: string;
}

export interface FastestLap {
  rank: string;
  lap: string;
  Time: FastestLapTime;
  AverageSpeed: AverageSpeed;
}

export interface AverageSpeed {
  units: Units;
  speed: string;
}

export enum Units {
  Kph = 'kph',
}

export interface FastestLapTime {
  time: string;
}

export interface ResultTime {
  millis: string;
  time: string;
}

export enum Status {
  Collision = 'Collision',
  Finished = 'Finished',
  Suspension = 'Suspension',
  The1Lap = '+1 Lap',
}
