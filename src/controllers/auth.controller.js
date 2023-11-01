import User from "../models/user.model.js";

//metodos de SIGNUP(para registrarse con sus datos) Y SIGNIN (para loguearse)

export const singup = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });
  const userValidate = await newUser.save();
  res.status(200).json(userValidate);
};
