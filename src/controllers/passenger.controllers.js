import { passengerService } from "../services/passenger.service.js";

async function create(req, res) {
  const { firstName, lastName } = req.body;

  await passengerService.create(firstName, lastName);
  res.status(201).send("Passageiro cadastrado!");
}

export const passengerController = { create };
