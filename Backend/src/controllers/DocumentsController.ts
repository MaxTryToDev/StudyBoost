import CatchAsync from "../utils/catchAsync";
import type {Request, Response} from "express";
import DocumentsModel from "../models/documents.model";

export const upload = CatchAsync(async (req: Request, res: Response) => {

  // Récupérer le fichier téléchargé
  const file = req.file;

  if (!file) {
    res.status(400).send('Aucun fichier téléchargé.');
    return;
  }

  const doc  = await DocumentsModel.create({
    name: file.filename,
    path: file.path,
  })



  // Afficher des informations sur le fichier téléchargé
  res.status(200).json({
    status: "success",
    data: {
      doc: doc
    }
  })})