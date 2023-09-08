import { travelRepository } from "../repositories/travel.repository.js";

async function create(passengerId, flightId) {
  await travelRepository.create(passengerId, flightId);
}

async function get(name) {
  const result = await travelRepository.get(name);
  if (result.rowCount > 10)
    throw {
      code: 500,
      message: "Too many results",
    };

  return result.rows;
}

export const travelServices = { create, get };
