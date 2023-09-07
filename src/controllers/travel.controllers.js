import { travelServices } from "../services/travel.service.js";

async function create(req, res) {
  const { passengerId, flightId } = req.body;

  await travelServices.create(passengerId, flightId);
  res.status(201).send("Viagem cadastrada com sucesso!");
}

export const travelControllers = { create };
