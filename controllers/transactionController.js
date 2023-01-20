import catchAyncErrors from "../middleware/catchAyncErrors.js";
import Transaction from "../models/transactionModel.js";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import { ApiFeatures } from "../utils/apiFeatures.js";

// Create Transation
export const createTransaction = catchAyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const { amount } = req.body;
  const user = await User.findById(req.user.id);
  user.currentBalance = user.currentBalance + amount;
  await user.save();
  const transaction = await Transaction.create(req.body);
  res.status(201).json({
    success: true,
    transaction,
    currentBalance: user.currentBalance,
  });
});
