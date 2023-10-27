const routes = require("express").Router();

routes.get("/products", (req, res) => {
  res.send("Pagina de Productos");
});

module.exports = routes;
