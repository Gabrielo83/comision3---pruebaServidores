import { body, validationResult } from "express-validator";

export const validarUsuario = [
  body("username")
    .notEmpty()
    .withMessage("Por favor el username no debe estar vacio")
    .isLength({ min: 6 })
    .withMessage("el username debe tener al menos 6 caracteres"),

  body("email").isEmail().withMessage("Ingrese un mail válido"),

  body("password")
    .notEmpty()
    .withMessage("El password es obligatorio")
    .isLength({ min: 6 })
    .withMessage("Longitud minima del password es de 6 caracteres"),
];

export const manejarErroresValidacion = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) {
    return res.status(400).json(error);
  }

  next();
};
