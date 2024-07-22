import catchAsync from "../utils/catchAsync";
import type {Request, Response} from "express";
import APIFeatures from "../utils/apiFeatures";
import FoldersModel from "../models/folders.model";

export const getAllFolders = catchAsync(async (req: Request, res: Response ) => {
  const results = new APIFeatures(FoldersModel.find(), req.query as any);
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
  const {slug} = req.params;

  const folder = await FoldersModel.findOne({slug: slug}, {new: true});

  res.status(200).json({
    status: 'success',
    data: {
      folder
    }
  })

})

export const updateFolder = catchAsync(async (req: Request, res: Response ) => {
  const data = req.body;
  const {slug} = req.params;

  const folder = await FoldersModel.findOneAndUpdate({slug: slug}, data, {new: true});

  res.status(200).json({
    status: 'success',
    data: {
      folder
    }
  })

})

export const deleteFolder = catchAsync(async (req: Request, res: Response ) => {
  const {slug} = req.params;

   await FoldersModel.findOneAndDelete({slug: slug});

  res.status(200).json({
    status: 'success',
    data: {
      folder: null
    }
  })

})