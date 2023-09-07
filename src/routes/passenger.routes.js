import { Router } from "express";
import { passengerController } from "../controllers/passenger.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { passengerSchema } from "../schemas/main.schemas.js";

const passengerRouter = Router();

passengerRouter.post(
  "/passengers",
  validateSchema(passengerSchema),
  passengerController.create
);

export default passengerRouter;
