import db from "../database/connection.database.js";

async function create(firstName, lastName) {
  return db.query(
    `INSERT INTO passengers ("firstName", "lastName") VALUES ($1, $2);`,
    [firstName, lastName]
  );
}

export const passengerRepositories = { create };
