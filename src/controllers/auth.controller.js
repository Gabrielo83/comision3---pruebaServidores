import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { settingSecretToken } from "../config.js";
import Role from "../models/Role.js";

//metodos de SIGNUP(para registrarse con sus datos) Y SIGNIN (para loguearse)

export const singup = async (req, res) => {
  const { username, email, password, roles } = req.body;

  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });
  //logica para los roles
  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({
      name: "user",
    });
    newUser.roles = [role._id];
  }

  const userValidated = await newUser.save();
  //ver los token

  const token = jwt.sign(
    { id: userValidated._id },
    settingSecretToken().secret,
    {
      expiresIn: "1h",
    }
  );

  res.status(200).json({ Message: "Usuario registrado con éxito", token });
};
