import express from "express";
import {} from "../controllers/productController.js";
import { isAuthenticatedUser } from "../middleware/auth.js";
const router = express.Router();

router
  .route("/admin/products/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);
