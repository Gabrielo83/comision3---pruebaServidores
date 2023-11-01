import { Router } from "express";
import { singup } from "../controllers/auth.controller.js";
import {
  validarUsuario,
  manejarErroresValidacion,
} from "../middlewares/user.validations.js";

export const authRouter = Router();

//SIGNUP
authRouter.post("/signup", validarUsuario, manejarErroresValidacion, singup);
