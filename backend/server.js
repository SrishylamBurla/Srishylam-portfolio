import mongoose from "mongoose";
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from 'cors'
import subscribeRouter from "./routes/subscribeRoute.js"

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())

app.use(cors({
  origin: ["https://srishylam-portfolio-2722.vercel.app"], // your frontend URL
  methods: ["GET", "POST"],
  credentials: true
}));


const connectDB = () =>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("Database connected...");
    })
    .catch((err)=>{
        console.log("database connection failed..", err);
    })
}
connectDB()

app.get("/", (req, res)=>{
    res.send("Api running...")
})

app.use("/api", subscribeRouter)


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
})