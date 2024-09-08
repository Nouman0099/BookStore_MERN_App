import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/bookRoute.js";
import userRoute from "./route/userRoute.js";
import cors from "cors";
const app = express();

// middleware
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URL = process.env.MongoDbUrl;

// Connected to mongoDB
try {
  mongoose.connect(URL, console.log("Connected to MongoDB"));
} catch (error) {
  console.log("error: ", error);
}

// Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
