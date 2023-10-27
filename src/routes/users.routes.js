const routes = require("express").Router();
const { userController } = require("../controllers/user.controller");

//------RUTAS GET
routes.get("/user", userController.getAllUsers);

routes.get("/user/:userId", userController.getUserById);

//------RUTAS POST

routes.post("/user", userController.createUser);
module.exports = routes;
