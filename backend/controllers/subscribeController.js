import Subscribe from "../model/Subscribe.js";
import asyncHandler from "express-async-handler"


export const addSubscription = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const newSub = await Subscribe.create({ email });
    res.status(201).json({ message: "Subscribed successfully", data: newSub });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Email already subscribed" });
    } else {
      res.status(500).json({ message: "Server error", error });
    }
  }
}
)