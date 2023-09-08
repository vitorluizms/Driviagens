import { travelRepository } from "../repositories/travel.repository.js";

async function create(passengerId, flightId) {
  await travelRepository.create(passengerId, flightId);
}

async function get(name) {
}

export const travelServices = { create };
