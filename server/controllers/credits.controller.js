import razorpay from "../utils/razorpay.js";
import crypto from "crypto";
import UserModel from "../models/user.model.js";

export const createOrder = async (req, res) => {

  

  try {
    const { amount } = req.body;

    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now()
    });

    res.json(order);

  } catch (err) {
    res.status(500).json(err);
  }
};

export const verifyPayment = async (req,res)=>{

  try{

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      amount
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body)
      .digest("hex");

      console.log("Order ID:", razorpay_order_id)
console.log("Payment ID:", razorpay_payment_id)
console.log("Signature from Razorpay:", razorpay_signature)
console.log("Generated Signature:", expectedSignature)

    if(expectedSignature !== razorpay_signature){
      return res.status(400).json({success:false});
    }

    // map price → credits
    const price =Number(amount)
    let credits = 0;

    if(amount === 10) credits = 50;
    if(amount === 50) credits = 100;
    if(amount === 100) credits = 250;

    console.log("User ID:", req.userId)
    console.log("Credits:", credits)
    // update user credits in database
    await UserModel.findByIdAndUpdate(req.userId,
        {$inc:{credits:credits}},
        // {new:true}
);

    res.json({success:true});

  }catch(err){
    console.log(err);
    res.status(500).json({success:false});
  }
}

