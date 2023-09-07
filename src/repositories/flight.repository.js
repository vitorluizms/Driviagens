import db from "../database/connection.database.js";

async function validateFlight(origin, destination) {
  const result = db.query(
    `
        SELECT * FROM cities WHERE id = $1 OR id = $2
    `,
    [origin, destination]
  );
  return result;
}

async function create(origin, destination, date) {
  return db.query(
    `
        INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3)
    `,
    [origin, destination, date]
  );
}

export const flightRepository = { validateFlight, create };
