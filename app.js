import express from "express";
import dotenv from 'dotenv';
import errorHandler from "./src/middlewares/errorHandler.js";
import { connectToDB } from "./src/config/db.js";
import productRouter from "./src/routes/product.route.js";
import categoryRouter from "./src/routes/category.route.js";
import cors from 'cors';

dotenv.config();

//create server
const app=express();

app.use(express.json());
app.use(errorHandler);
//app.use(cors);

//routes for product & category
app.use("/api/service/products",productRouter);
app.use("/api/service/categories",categoryRouter);

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
    connectToDB();
});

//export default app;