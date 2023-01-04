import { Request, Response } from "express";
import WorkModel from "../models/workModel";

// Get ALL works

export const getAllWorks = async (req: Request, res: Response) => {
  console.log("Getting ALL work Entries");
  const works = await WorkModel.find({});
  res.status(200).json(works);
};

// Get A work based on ID

// Create A Work

export const createWork = async (req: Request, res: Response) => {
  console.log("Creating a work entry");
  const { name, position } = req.body;

  try {
    const work = await WorkModel.create({ name, position });
    res.status(200).json(work);
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};

// Update A Work

// Delete A Work

export const deleteWork = async (req: Request, res: Response) => {};
