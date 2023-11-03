import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//generar los metodos para cifrar las contraseñas y comparar para validar
//utilizamos un metodo estatico para evitar instanciar
userSchema.statics.encryptPassword = async (password) => {
  const salt = bcrypt.genSaltSync();
  return await bcrypt.hashSync(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export default model("User", userSchema);
