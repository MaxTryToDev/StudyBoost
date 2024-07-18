import {FlashcardsModel, FlashcardsGroupModel} from "../models/flashcards.model"
import {Request, Response} from "express";
import catchAsync from "../utils/catchAsync";
import APIFeatures from "../utils/apiFeatures";


//Flashcard
export const getAllFlashcard = catchAsync(async (req: Request, res: Response) => {
  const results = new APIFeatures(FlashcardsModel.find(), req.query as { [key: string]: string })
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const flashcards = await results.query

  console.log("qlsdkfhqslfhl")


  res.status(200).json({
    status: "success",
    record: flashcards.length,
    data: {
      flashcards
    }
  })
})

export const createFlashcard = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const flashcard = await FlashcardsModel.create(data);

  res.status(200).json({
    status: "success",
    data: {
      flashcard
    }
  })
})

export const updateFlashcard = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const {id} = req.params;

  const flashcard = await FlashcardsModel.findByIdAndUpdate(id, data, {new: true});

  res.status(200).json({
    status: "success",
    data: {
      flashcard
    }
  })
})

export const deleteFlashcard = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;

  await FlashcardsModel.findByIdAndDelete(id);

  res.status(200).json({
    status: "success",
    data: null
  })
})


//Group
export const getAllGroup = catchAsync(async (req: Request, res: Response) => {

  const results = new APIFeatures(FlashcardsGroupModel.find().populate("flashcards"), req.query as { [key: string]: string })
    .filter()
    .sort()
    .limitFields()
    .paginate();


  const groups = await results.query

  res.status(200).json({
    status: "success",
    record: groups.length,
    data: {
      groups
    }
  })
})

export const getGroup = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;

  const group = await FlashcardsGroupModel.findById(id);

  res.status(200).json({
    status: "success",
    data: {
      group
    }
  })
});


export const createGroup = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;

  const group = await FlashcardsGroupModel.create(data);

  res.status(200).json({
    status: "success",
    data: {
      group
    }
  })
});


export const updateGroup = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const {id} = req.params;

  const group = await FlashcardsGroupModel.findByIdAndUpdate(id, data, {new: true});

  res.status(200).json({
    status: "success",
    data: {
      group
    }
  })
});


export const deleteGroup = catchAsync(async (req: Request, res: Response) => {
  const {id} = req.params;

  await FlashcardsGroupModel.findByIdAndDelete(id);

  res.status(200).json({
    status: "success",
    data: null
  })
});