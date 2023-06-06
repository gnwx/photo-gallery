import "dotenv/config";
import mongoose from "mongoose";
import app from "./app.js";
const port = process.env.PORT;
const dbUrl = process.env.MONGODB_URI;

mongoose
  .connect(dbUrl)
  .then(() => {
    app.listen(port, () => console.log(`Server is runnin on PORT: ${port}`));
  })
  .catch((err) => console.log(`There is an error ${err}`));
