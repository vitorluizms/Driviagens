import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { travelSchema } from "../schemas/main.schemas.js";
import { travelControllers } from "../controllers/travel.controllers.js";

const travelRouter = Router();

travelRouter.post(
  "/travels",
  validateSchema(travelSchema),
  travelControllers.create
);

travelRouter.get("/passengers/travels", travelControllers.get);

export default travelRouter;
