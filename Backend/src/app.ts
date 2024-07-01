import express, { Response, Request } from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

//Log
if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

//Configuration d'express
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//Dossier de fichier static
app.use(express.static(`${__dirname}/../public`));

//routes
app.get("/test", (req: Request, res: Response) => {
  res.send("OK");
});

app.use("/v1/", () => {});
app.use("/v1/flachcards", () => {});
app.use("/v1/documents", () => {});
app.use("/v1/sessions", () => {});
app.use("/v1/courses", () => {});
app.use("/v1/users", () => {});

export default app;
