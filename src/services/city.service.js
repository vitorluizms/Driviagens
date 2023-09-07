import { cityRepository } from "../repositories/city.repository.js";

async function create(name) {
  await cityRepository.create(name);
}

export const cityService = { create };
