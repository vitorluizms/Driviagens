import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/index.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`--------------- Server running on port ${PORT}`)
);
