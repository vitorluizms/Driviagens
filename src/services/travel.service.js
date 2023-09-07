import { travelRepository } from "../repositories/travel.repository.js";

async function create(passengerId, flightId) {
  await travelRepository.create(passengerId, flightId);
}

export const travelServices = { create };
