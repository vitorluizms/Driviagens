import { passengerRepositories } from "../repositories/passenger.repository.js";

async function create(firstName, lastName) {
  await passengerRepositories.create(firstName, lastName);
}

export const passengerService = { create };
