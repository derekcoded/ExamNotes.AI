import express from "express";
import {createOrder, verifyPayment} from "../controllers/credits.controller.js";
import isAuth from "../middleware/isAuth.js";

const router = express.Router();
router.post("/create-order",createOrder);
router.post("/verify-payment",isAuth,verifyPayment);

export default router;