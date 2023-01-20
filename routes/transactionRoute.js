import express from "express";
import { createTransaction } from "../controllers/transactionController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route("/transaction/new").post(isAuthenticatedUser, createTransaction);

export default router;
