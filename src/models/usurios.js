import { Schema, model } from 'mongoose'
import bcrypt from "bcryptjs";
const usuarioSchema = new Schema (
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
          required: true,
        },
        roles: [
          {
            type: Schema.Types.ObjectId,
            ref: "rol",
          },
        ],
      },
      {
        timestamps: true,
        versionKey: false,
      }
    );

usuarioSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };

usuarioSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword)
}


export default model('usuario', usuarioSchema);