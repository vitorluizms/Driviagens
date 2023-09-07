import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import { flightService } from "../services/flight.service.js";
dayjs.extend(customParseFormat);

async function create(req, res) {
  const { origin, destination, date } = req.body;

  await flightService.create(origin, destination, date);
  res.status(201).send("Voo cadastrado com sucesso!");
}

export const flightController = { create };
