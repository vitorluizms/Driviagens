import { Router } from "express";
import { flightController } from "../controllers/flight.controllers.js";
import {
  validateQuerySchema,
  validateSchema,
} from "../middlewares/validateSchema.middleware.js";
import { flightQuerySchema, flightSchema } from "../schemas/main.schemas.js";

const flightRouter = Router();

flightRouter.post(
  "/flights",
  validateSchema(flightSchema),
  flightController.create
);
flightRouter.get(
  "/flights",
  validateQuerySchema(flightQuerySchema),
  flightController.get
);

export default flightRouter;
