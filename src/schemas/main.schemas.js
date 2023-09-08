import JoiImport from "joi";
import joi from "joi";
import DateExtension from "@joi/date";
const Joi = JoiImport.extend(DateExtension);

export const passengerSchema = joi.object({
  firstName: joi.string().min(2).max(100).required(),
  lastName: joi.string().min(2).max(100).required(),
});

export const citySchema = joi.object({
  name: joi.string().min(2).max(50).required(),
});

export const flightSchema = joi.object({
  origin: joi.number().required(),
  destination: joi.number().required(),
  date: Joi.date().format("DD-MM-YYYY").utc(),
});

export const travelSchema = joi.object({
  passengerId: joi.number().required(),
  flightId: joi.number().required(),
});

export const flightQuerySchema = joi.object({
  origin: joi.string().optional(),
  destination: joi.string().optional(),
  "smaller-date": Joi.date().format("DD-MM-YYYY").utc(),
  "bigger-date": Joi.date().format("DD-MM-YYYY").utc(),
  page: joi.optional(),
});
