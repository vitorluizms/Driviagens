import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import { flightRepository } from "../repositories/flight.repository.js";
import { conflict } from "../errors/conflict.js";
import { unprocessable } from "../errors/unprocessableContent.js";
dayjs.extend(customParseFormat);

async function create(origin, destination, date) {
  if (origin === destination)
    throw conflict("Origem e destino não podem ser a mesma cidade");

  const formattedDate = dayjs(date, "DD-MM-YYYY").format("YYYY-MM-DD");
  if (dayjs().isAfter(dayjs(formattedDate)))
    throw unprocessable("A data informadada já passou!");

  await flightRepository.create(origin, destination, date);
}

export const flightService = { create };
