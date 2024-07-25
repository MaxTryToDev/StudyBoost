import catchAsync from "../utils/catchAsync";
import type {Request, Response} from "express";
import APIFeatures from "../utils/apiFeatures";
import FoldersModel from "../models/folders.model";

export const getAllFolders = catchAsync(async (req: Request, res: Response ) => {
  const results = new APIFeatures(FoldersModel.find().populate("folders", "documents"), req.query as any);
  const folders = await results.query;

  res.status(200).json({
    status: 'success',
    data: {
      folders
    }
  })

})


export const createFolder = catchAsync(async (req: Request, res: Response ) => {
  const data = req.body

  const folder = await FoldersModel.create(data);

  res.status(200).json({
    status: 'success',
    data: {
      folder
    }
  })

})

export const getFolder = catchAsync(async (req: Request, res: Response ) => {
  const {id} = req.params;

  const folder = await FoldersModel.findById(id);

  res.status(200).json({
    status: 'success',
    data: {
      folder
    }
  })

})

export const updateFolder = catchAsync(async (req: Request, res: Response ) => {
  const data = req.body;
  const {id} = req.params;

  const folder = await FoldersModel.findOneAndUpdate({id: id}, data, {new: true});

  res.status(200).json({
    status: 'success',
    data: {
      folder
    }
  })

})

export const deleteFolder = catchAsync(async (req: Request, res: Response ) => {
  const {id} = req.params;

   await FoldersModel.findOneAndDelete({id: id});

  res.status(200).json({
    status: 'success',
    data: {
      folder: null
    }
  })

})