import db from "../database/connection.database.js";

async function create(origin, destination, date) {
  return db.query(
    `
        INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);
    `,
    [origin, destination, date]
  );
}

async function getFlights(origin, destination, smallerDate, biggerDate) {
  let query = "";
  let injection = [];

  if (origin) {
    query += `${
      destination
        ? smallerDate
          ? "WHERE cities.name = $1 AND destination.name = $2 AND date >= $3 AND date <= $4"
          : "WHERE cities.name = $1 AND destination.name = $2"
        : smallerDate
        ? "WHERE cities.name = $1 AND date >= $2 AND date <= $3"
        : "WHERE cities.name = $1"
    }`;

    injection.push(origin);

    if (destination) {
      if (smallerDate) {
        injection.push(destination, smallerDate, biggerDate);
      } else {
        injection.push(destination);
      }
    } else if (smallerDate) {
      injection.push(smallerDate, biggerDate);
    }
  } else if (destination) {
    query += `${
      smallerDate
        ? "WHERE destination.name = $1 AND date >= $2 AND date <= $3"
        : "WHERE destination.name = $1"
    }`;

    injection.push(destination);
    if (smallerDate) {
      injection.push(smallerDate, biggerDate);
    }
  } else if (smallerDate) {
    query += "WHERE date >= $1 AND date <= $2";
    injection.push(smallerDate, biggerDate);
  }

  console.log(injection);
  console;
  const result = db.query(
    `
    SELECT flights.id ,cities.name AS origin, destination.name AS destination, TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
	    FROM flights 
	    JOIN cities ON cities.id = flights.origin
	    JOIN cities AS destination ON destination.id = flights.destination
      ${query}
	    ORDER BY flights.date;
  `,
    injection
  );
  return result;
}

export const flightRepository = { create, getFlights };
