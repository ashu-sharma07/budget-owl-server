import catchAyncErrors from "../middleware/catchAyncErrors.js";
import Transaction from "../models/transactionModel.js";
import User from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import { ApiFeatures } from "../utils/apiFeatures.js";

// Create Transation
export const createTransaction = catchAyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;
  const { amount, tranType } = req.body;
  const user = await User.findById(req.user.id);
  if (tranType === "Expense") {
    user.currentBalance = user.currentBalance - amount;
    user.totalExpense = user.totalExpense + amount;
  } else {
    user.currentBalance = user.currentBalance + amount;
    user.totalIncome = user.totalIncome + amount;
  }
  await user.save();
  const transaction = await Transaction.create(req.body);
  res.status(201).json({
    success: true,
    transaction,
    currentBalance: user.currentBalance,
    totalExpense: user.totalExpense,
    totalIncome: user.totalIncome,
  });
});

// Get all transactions

export const getAllTransactions = catchAyncErrors(async (req, res) => {
  // const resPerPage = 9;
  // const productsCount = await Product.countDocuments();
  // const apiFeature = new ApiFeatures(Product.find(), req.query)
  //   .search()
  //   .filter()
  //   .pagination(resPerPage);
  // const products = await apiFeature.query;
  res.status(200).json({ success: true, products, productsCount });
});
