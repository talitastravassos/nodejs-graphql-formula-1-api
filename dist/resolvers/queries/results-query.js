"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultsQuery = void 0;
exports.ResultsQuery = `
query Results {
  results(roundId: "5", year: "2020") {
    season
    round
    Races {
      Results {
        number
        position
        positionText
        points
        Driver {
          driverId
          url
          givenName
          familyName
          dateOfBirth
          nationality
          permanentNumber
          code
        }
        Constructor {
          constructorId
          name
          url
          nationality
        }
        Time {
          millis
          time
        }
        FastestLap {
          time
        }
        status
        grid
        laps
      }
      season
      round
      url
      raceName
      circuit {
        circuitId
        url
        circuitName
        location {
          lat
          long
          locality
          country
        }
      }
      date
      time
    }
  }
}`;
