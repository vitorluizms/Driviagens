import db from "../database/connection.database.js";

async function create(name) {
  return db.query(
    `
        INSERT INTO cities (name) VALUES ($1);
    `,
    [name]
  );
}

export const cityRepository = { create };
