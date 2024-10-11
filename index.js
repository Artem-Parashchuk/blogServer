import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./routes/auth.js";

let app = express();

dotenv.config();

//Constants
const PORT = process.env.PORT || 3001;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", authRoute);

async function connectDB() {
  try {
    await mongoose.connect(
      `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ceuuu.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Connect to DB");
  } catch (error) {
    console.log(error.message);
  }
}
connectDB();

app.listen(PORT, () => {
  console.log(`Server run on ${PORT} port`);
});
