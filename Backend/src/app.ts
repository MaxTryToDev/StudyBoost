import express, {Response, Request, NextFunction} from "express";
import cors from "cors";
import morgan from "morgan";

import flashcardsRoute from "./routes/falshcardsRoute";
import foldersRoute from "./routes/foldersRoute";
import usersRoute from "./routes/usersRoute";
import uploadRoute from "./routes/uploadRoute";

import globalErrorHandler from "./controllers/errorController";
import AppError from "./utils/appError";
import * as path from "node:path";
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
app.use('/files', express.static(path.join(__dirname, '../files')));

//routes
app.get("/test", (req: Request, res: Response) => {
  res.send("OK");
});

app.use("/v1/flashcards", flashcardsRoute);
app.use("/v1/documents", uploadRoute);
app.use("/v1/sessions", () => {});
app.use("/v1/folders", foldersRoute);
app.use("/v1/users", usersRoute);

//Handle Error
app.all('*', (req:Request, res:Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
