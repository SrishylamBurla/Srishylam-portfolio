import Subscribe from "../model/Subscribe.js";
import asyncHandler from "express-async-handler";

export const addSubscription = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await Subscribe.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already subscribed" });
    }

    const newSub = await Subscribe.create({ email });
    res.status(201).json({ message: "Subscribed successfully", data: newSub });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});
