import mongoose from "mongoose";
import { settingDotEnv } from "../config.js";

const { db } = settingDotEnv();

mongoose
  .connect(db.localhost)
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log("Error al conectarse a Mongodb"));
