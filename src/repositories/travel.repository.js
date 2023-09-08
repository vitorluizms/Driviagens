import db from "../database/connection.database.js";

function create(passengerId, flightId) {
  return db.query(
    `
        INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);
    `,
    [passengerId, flightId]
  );
}

function get(name) {
  let query = "";
  let injection = [];

  if (name) {
    if (typeof name === "object") {
      name.forEach((element, index) => {
        if (index === 0) {
          query += `WHERE ("firstName" || ' ' || "lastName") ILIKE $${
            index + 1
          }`;
        } else {
          query += `OR ("firstName" || ' ' || "lastName") ILIKE $${index + 1}`;
        }
        injection.push("%" + element + "%");
      });
    } else {
      query += `WHERE ("firstName" || ' ' || "lastName") ILIKE $1`;
      injection.push("%" + name + "%");
    }
  }

  const result = db.query(
    `
  SELECT "firstName" || ' ' || "lastName" AS passenger, COUNT(travels."passengerId") AS travels
	  FROM passengers
	  LEFT JOIN travels ON travels."passengerId" = passengers.id
	  ${name ? query : ""}
	  GROUP BY passengers."firstName", passengers."lastName"
    ORDER BY travels DESC;
  `,
    injection
  );

  return result;
}

export const travelRepository = { create, get };
