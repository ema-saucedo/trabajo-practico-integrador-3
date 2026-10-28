import mongoose from "mongoose";

export const startDB = async () => {
  try {
    // process.env.MONGODB_URI viene del .env; si no existe, va a usar la base de datos local.
    const uri =
      process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/tp-integrador3";
    await mongoose.connect(uri);
    console.log("Conectado a la base de datos correctamente");
  } catch (error) {
    console.log("No se pudo conectar a la base de datos", error);
  }
};
