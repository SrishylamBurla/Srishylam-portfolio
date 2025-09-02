import express from "express";
import { addSubscription } from "../controllers/subscribeController.js";

const router = express.Router();

router.post("/subscribe", addSubscription);

export default router;
