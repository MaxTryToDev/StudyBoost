import "dotenv/config";
import app from "./app";
import dbConnection from "./config/dbConnection";

const port = parseInt(process.env.PORT ? process.env.PORT : "3000");

//Connnexion à la base de donnée
dbConnection();

//Démarer l'application sur un port
app.listen(port, "127.0.0.1", () => {
  console.log(`Le serveur à démarrer à l'adresse http://localhost:${port}`);
});
