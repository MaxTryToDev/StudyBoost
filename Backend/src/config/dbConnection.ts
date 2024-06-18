import mongoose from "mongoose";

export default () => {
  try {
    const db = process.env.DATABASE_URL?.replace(
      "<PASSWORD>",
      process.env.DATABASE_PASSWORD || "",
    );

    mongoose.connect(db || "");
    console.log("Connexion établi avec la base de donnée");
  } catch (e) {
    console.error(e);
  }
};
