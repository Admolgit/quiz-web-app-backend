import { Request, Response } from "express";
import User from "../models/userModel.models";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password, isAdmin } = req.body;

    if (!name || !email || !password || !isAdmin) {
      throw new Error("All fields must be filled");
    }

    const user = await User.create({
      name: name,
      email: email,
      password: password,
      isAdmin: isAdmin,
    })

    return res.status(201).json({
      message: "User created successfully",
      user: user,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.find({ _id: id }).populate('highScores')

    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      user: user,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {

    const users = await User.find({});

    if (!users) {
      res.status(404).json({ message: "Users not found" });
    }

    return res.status(200).json({
      message: "Users fetched successfully",
      users: users,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
