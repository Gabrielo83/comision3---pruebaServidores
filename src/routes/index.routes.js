const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Pagina de INICIO");
});

module.exports = routes;
