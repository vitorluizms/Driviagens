import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import { flightRepository } from "../repositories/flight.repository.js";
import { conflict } from "../errors/conflict.js";
import { unprocessable } from "../errors/unprocessableContent.js";
import { formatter } from "../utils/dateFormatter.js";
import { badRequest } from "../errors/badRequest.js";
dayjs.extend(customParseFormat);

async function create(origin, destination, date) {
  if (origin === destination)
    throw conflict("Origem e destino não podem ser a mesma cidade");

  const formattedDate = dayjs(date, "DD-MM-YYYY").format("YYYY-MM-DD");
  if (dayjs().isAfter(dayjs(formattedDate)))
    throw unprocessable("A data informadada já passou!");

  await flightRepository.create(origin, destination, date);
}

async function get(origin, destination, smallerDate, biggerDate, page) {
  if ((smallerDate && !biggerDate) || (biggerDate && !smallerDate)) {
    throw unprocessable("Informe as duas datas!");
  }

  if (page && (isNaN(parseInt(page)) || page <= 0)) {
    throw badRequest("Invalid page value");
  }

  let smaller = formatter(smallerDate);
  let bigger = formatter(biggerDate);
  if (dayjs(smaller).isAfter(bigger)) {
    throw badRequest("A data inicial precisa ser maior que a final!");
  }
  const promise = await flightRepository.getFlights(
    origin,
    destination,
    (smaller = smaller === "Invalid Date" ? undefined : smaller),
    (bigger = bigger === "Invalid Date" ? undefined : bigger),
    page
  );
  return promise.rows;
}

export const flightService = { create, get };
