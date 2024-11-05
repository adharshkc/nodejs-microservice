import express from "express";
import connectDb from "./config/db";
import productRouter from "./routes/post";
import dotenv from "dotenv"
dotenv.config()

const app = express();
app.use(express.json());

app.use((req, res,next)=>{
    console.log("req", req.url)
    next()
})
app.use("/products", productRouter);
connectDb();
app.listen(3001, () => {
  console.log("server is running on server 3001");
});
