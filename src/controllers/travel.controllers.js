import { travelServices } from "../services/travel.service.js";

async function create(req, res) {
  const { passengerId, flightId } = req.body;

  await travelServices.create(passengerId, flightId);
  res.status(201).send("Viagem cadastrada com sucesso!");
}

async function get(req, res) {
  const { name, page } = req.query;

  const result = await travelServices.get(name, page);
  res.status(200).send(result);
}

export const travelControllers = { create, get };
