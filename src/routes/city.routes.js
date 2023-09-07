import { Router } from "express";
import { cityController } from "../controllers/city.controllers.js";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/main.schemas.js";

const cityRouter = Router();

cityRouter.post("/cities", validateSchema(citySchema), cityController.create);

export default cityRouter;
