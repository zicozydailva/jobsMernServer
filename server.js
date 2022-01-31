// setting "type": "module" in package.json allowed us to be able to use ES6 imports instead of regular JS.. i.e from const -> import


import express from "express";
import dotenv from "dotenv"
dotenv.config()
const app = express();
const port = process.env.PORT || 500

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.get("/", (req, res) => {
    res.send("Working")
})
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})