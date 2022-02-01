// setting "type": "module" in package.json allowed us to be able to use ES6 imports instead of regular JS.. i.e from const -> import

import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 500;
import connectDB from "./db/connect.js";
import "express-async-errors"

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// router
import authRouter from "./routes/authRoutes.js"
import jobRouter from "./routes/jobRouter.js"

app.use(express.json())

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobRouter)

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI).then(() =>
      console.log("DB CONNECTED!!!")
    );
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start()