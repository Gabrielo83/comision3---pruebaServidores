import { Router } from "express";
import { signup, signin } from "../controllers/auth.controller.js";
import {
  validarUsuario,
  manejarErroresValidacion,
} from "../middlewares/user.validations.js";

export const authRouter = Router();

//SIGNUP
authRouter.post("/signup", validarUsuario, manejarErroresValidacion, signup);

authRouter.post("/signin", signin);
