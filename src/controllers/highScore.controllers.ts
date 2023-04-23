import { Request, Response } from "express";
import highScore from "../models/highScoreModel.models";

export const createHighScore = async (req: Request, res: Response) => {
  try {
    // const { userId } = req.params;
    const { score, name } = req.body;

    if (!score || !name) {
      return res.status(404).json({ message: "All fields must be filled" });
    }

    const checkName = await highScore.findOne({
      name: name,
    });

    if (!checkName) {

      const highScores = await highScore.create({ score, name });

      return res.status(201).json({
        message: "High scores were created successfully",
        highScores: highScores,
      });
    } else {
      const highScores = await highScore.updateOne(
        { name: name },
        {
          $push: {
            score: score,
          },
        }
      );
      
      return res.status(201).json({
        message: "High scores were created successfully",
        highScores: highScores,
      });
    }
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getScore = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const highScores = await highScore.findById({ _id: id });

    if (!highScores) {
      return res.status(404).json({
        message: "No high scores found",
      });
    }

    return res.status(200).json({
      message: "High scores fetched successfully",
      highScores: highScores,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};

export const getScores = async (req: Request, res: Response) => {
  try {
    const highScores = await highScore.find({});

    if (!highScores) {
      res.status(404).json({
        message: "No high scores found",
      });
    }

    return res.status(200).json({
      message: "High scores fetched successfully",
      highScores: highScores,
    });
  } catch (error: any) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
