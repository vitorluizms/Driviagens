import db from "../database/connection.database.js";

function create(passengerId, flightId) {
  return db.query(
    `
        INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);
    `,
    [passengerId, flightId]
  );
}

export const travelRepository = { create };
