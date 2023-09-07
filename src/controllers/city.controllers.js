import { cityService } from "../services/city.service.js";

async function create(req, res) {
  const { name } = req.body;

  await cityService.create(name);
  res.status(201).send("Cidade cadastrada com sucesso!");
}

export const cityController = { create };
