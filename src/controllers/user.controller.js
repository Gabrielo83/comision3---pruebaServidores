const userController = {};

userController.getAllUsers = (req, res) => {
  res.send("Se buscan todos los usuarios");
};

userController.getUserById = (req, res) => {
  res.send("Se busca un usuario");
};

userController.createUser = (req, res) => {
  res.json({ mensaje: "Se ha creado un usuario" });
};

module.exports = { userController };
