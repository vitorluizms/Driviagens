import { Router } from "express";
import { flightController } from "../controllers/flight.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { flightSchema } from "../schemas/main.schemas.js";

const flightRouter = Router();

flightRouter.post(
  "/flights",
  validateSchema(flightSchema),
  flightController.create
);

export default flightRouter;
