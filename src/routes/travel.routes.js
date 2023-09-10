import { Router } from "express";
import {
  validateQuerySchema,
  validateSchema,
} from "../middlewares/validateSchema.middleware.js";
import { travelSchema, travelsQuerySchema } from "../schemas/main.schemas.js";
import { travelControllers } from "../controllers/travel.controllers.js";

const travelRouter = Router();

travelRouter.post(
  "/travels",
  validateSchema(travelSchema),
  travelControllers.create
);

travelRouter.get(
  "/passengers/travels",
  validateQuerySchema(travelsQuerySchema),
  travelControllers.get
);

export default travelRouter;
