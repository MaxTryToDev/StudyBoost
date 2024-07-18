import express, {Response, Request, NextFunction} from "express";
import cors from "cors";
import morgan from "morgan";
import flashcardsRoute from "./routes/falshcardsRoute";
import globalErrorHandler from "./controllers/errorController";
import AppError from "./utils/appError";
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

app.use("/v1/flashcards", flashcardsRoute);
app.use("/v1/documents", () => {});
app.use("/v1/sessions", () => {});
app.use("/v1/courses", () => {});
app.use("/v1/users", () => {});

//Handle Error
app.all('*', (req:Request, res:Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export default app;
