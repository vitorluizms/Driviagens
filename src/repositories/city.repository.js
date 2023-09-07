import db from "../database/connection.database.js";

async function validateCity(name) {
  const result = db.query(
    `
        SELECT * FROM cities WHERE name = $1;
    `,
    [name]
  );
  return result;
}

async function create(name) {
  return db.query(
    `
        INSERT INTO cities (name) VALUES ($1);
    `,
    [name]
  );
}

export const cityRepository = { validateCity, create };
