import HobbyModel from "../models/hobbyModel";
import { Request, Response } from "express";

// Get ALL hobbies
export const getAllHobbies = async (req: Request, res: Response) => {
  console.log("Getting ALL hobbies");
  const hobbies = HobbyModel.find({});
  res.status(200).json(hobbies);
};

// Get a hobby based on ID

// Create A Hobby

export const CreateHobby = async (req: Request, res: Response) => {
  console.log("Creating A New Hobby");
  const { name, description } = req.body;

  try {
    const hobby = await HobbyModel.create({ name, description });
    res.status(200).json(hobby);
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    res.status(400).json({error : error.message });
  }
};

// Update A Hobby

// Delete A Hobby
