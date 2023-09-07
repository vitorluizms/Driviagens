import joi from "joi";

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
  date: joi
    .string()
    .pattern(/^(\d{2})-(\d{2})-(\d{4})$/)
    .required(),
});

export const travelSchema = joi.object({
  passengerId: joi.number().required(),
  flightId: joi.number().required(),
});
