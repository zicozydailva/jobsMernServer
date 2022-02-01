// setting "type": "module" in package.json allowed us to be able to use ES6 imports instead of regular JS.. i.e from const -> import

import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const port = process.env.PORT || 500;
import connectDB from "./db/connect.js";
import "express-async-errors"
// import cors from "cors"

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

// router
import authRouter from "./routes/authRoutes.js"
import jobRouter from "./routes/jobRouter.js"

app.use(express.json())
// NOTE: you don't need the cors middleware when using proxy setup on package.json
// app.use(cors())
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/jobs", jobRouter)


app.get("/api/v1", (req, res) => {
  res.json("Welcome!!!")
})

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