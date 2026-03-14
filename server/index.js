import express from "express"
import dotenv from "dotenv"
import connectDb from "./utils/connectDb.js"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./routes/user.route.js"
import notesRouter from "./routes/generate.route.js"
import pdfRouter from "./routes/pdf.route.js"
import paymentRoutes from "./routes/credits.route.js"


dotenv.config();



const app = express()


app.use(cors(
    {origin:"https://examnotes-aiclient2.onrender.com",
    credentials:true,
    methods:["GET","POST","PUT","DELETE","OPTIONS"]
    }
// app.use(cors(
//     {origin:"http://localhost:5173",
//     credentials:true,
//     methods:["GET","POST","PUT","DELETE","OPTIONS"]
//     }
))
app.use(express.json())
app.use(cookieParser())
const PORT = process.env.PORT || 5000
app.get("/",(req,res)=>{
    res.json({message:"Exam notes generator server backend running"})
})
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.use("/api/notes",notesRouter)
app.use("/api/pdf",pdfRouter)
app.use("/api/payment", paymentRoutes);



app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server is running on port ${PORT}`)
    connectDb()
})