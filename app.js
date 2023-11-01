import express from "express";
import { indexRoutes } from "./src/routes/index.routes.js";
import { productRoutes } from "./src/routes/products.routes.js";
import { authRouter } from "./src/routes/auth.routes.js";

import "./src/database/db.js";
import { settingDotEnv } from "./src/config.js";

const app = express();

app.use(express.json());
app.use("/api/", indexRoutes);
app.use("/api/", productRoutes);
app.use("/api/", authRouter);

const { port } = settingDotEnv();
app.listen(port, () =>
  console.log(`Servidor Express corriendo en el puerto ${port}`)
);
