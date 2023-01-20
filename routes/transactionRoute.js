import express from "express";
import {
  getAllTransactions,
  createTransaction,
  getSingleTransaction,
} from "../controllers/transactionController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router.route("/transaction").get(isAuthenticatedUser, getAllTransactions);
router.route("/transaction/new").post(isAuthenticatedUser, createTransaction);
router.route("/transaction/:id").get(getSingleTransaction);

export default router;
