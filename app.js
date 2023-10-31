import express from "express";

const indexRoutes = require("./src/routes/index.routes");
const userRoutes = require("./src/routes/users.routes");
const productsRoutes = require("./src/routes/products.routes");

const app = express();

app.use("/api/", indexRoutes);
app.use("/api/", userRoutes);
app.use("/api/", productsRoutes);

const port = 4000;
app.listen(port, () =>
  console.log(`Servidor Express corriendo en el puerto ${port}`)
);
